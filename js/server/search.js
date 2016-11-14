const app = require('../app');

const {extend} = $;

class Combination {
  constructor(derivedQuantities, baseQuantities, lastQuantity, countCalculation = true) {
    this.derivedQuantities = derivedQuantities;
    this.baseQuantities = baseQuantities;
    this.lastQuantity = lastQuantity;
    if (countCalculation) this.calculateCount();
  }

  calculateCount() {
    let count = 0;
    for (const type in this.derivedQuantities) {
      count += Math.abs(this.derivedQuantities[type]);
    }
    for (const type in this.baseQuantities) {
      count += Math.abs(this.baseQuantities[type]);
    }
    this.count = count;
  }

  countDerivedUnits() {
    let count = 0;
    for (const type in this.derivedQuantities) {
      count += Math.abs(this.derivedQuantities[type]);
    }
    return count;
  }

  create(quantity, inverse) {
    const factor = inverse ? -1 : 1;
    const new_ = new Combination(extend(true, {}, this.derivedQuantities), extend(true, {}, this.baseQuantities), quantity.name, false);

    const type = quantity.name;
    if (!(type in new_.derivedQuantities)) {
      new_.derivedQuantities[type] = factor;
    } else {
      if (new_.derivedQuantities[type] / factor < 0) return null;
      new_.derivedQuantities[type] += factor;
    }

    const types = quantity.types;
    for (const type in types) {
      if (!(type in new_.baseQuantities)) {
        new_.baseQuantities[type] = -factor * types[type];
      } else {
        new_.baseQuantities[type] -= factor * types[type];
      }
      if (new_.baseQuantities[type] == 0) {
        delete new_.baseQuantities[type];
      }
    }

    new_.calculateCount();
    return new_;
  }
}

module.exports = (unitless) => {
  const MAX_COMBINATION = 10;
  const queue = [new Combination({}, unitless.types, null)];
  const quantities = app.getDerivedQuantities();
  let combinations = [];
  for (let i = 0; i < MAX_COMBINATION; i++) {
    combinations.push([]);
  }
  while (queue.length) {
    const e = queue.shift();
    if (e == null) continue;
    if (e.count < MAX_COMBINATION) {
      combinations[e.count].push(e);
    }
    if (e.countDerivedUnits() < 4) {
      let start = e.lastQuantity == null;
      for (const quantityName in quantities) {
        if (quantityName == e.lastQuantity) start = true;
        if (!start) continue;
        const quantity = quantities[quantityName];
        queue.push(e.create(quantity, false));
        queue.push(e.create(quantity, true));
      }
    }
  }
  let plain = [];
  for (const cs of combinations) {
    for (const c of cs) {
      plain.push(c);
    }
  }
  return plain;
};