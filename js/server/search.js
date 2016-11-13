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
    var count = 0;
    for (const type in this.derivedQuantities) {
      count += Math.abs(this.derivedQuantities[type]);
    }
    for (const type in this.baseQuantities) {
      count += Math.abs(this.baseQuantities[type]);
    }
    this.count = count;
  }

  countDerivedUnits() {
    var count = 0;
    for (const type in this.derivedQuantities) {
      count += Math.abs(this.derivedQuantities[type]);
    }
    return count;
  }

  create(quantity, inverse) {
    const factor = inverse ? -1 : 1;
    const new_ = new Combination(extend(true, {}, this.derivedQuantities), extend(true, {}, this.baseQuantities), quantity.name, false);

    const type = quantity.name;
    if (!new_.derivedQuantities.hasOwnProperty(type)) {
      new_.derivedQuantities[type] = factor;
    } else {
      if (new_.derivedQuantities[type] / factor < 0) return null;
      new_.derivedQuantities[type] += factor;
    }

    const types = quantity.types;
    for (const type in types) {
      if (!new_.baseQuantities.hasOwnProperty(type)) {
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
  const queue = [new Combination({}, unitless.types, null)];
  const quantities = app.getDerivedQuantities();
  var minCount = 0x7fffffff;
  var minCombinations = [];
  while (queue.length > 0) {
    const e = queue.shift();
    if (e == null) continue;
    if (minCount > e.count) {
      minCount = e.count;
      minCombinations = [e];
    } else if (minCount == e.count) {
      minCombinations.push(e);
    }
    if (e.countDerivedUnits() < 4) {
      var start = e.lastQuantity == null;
      for (const quantityName in quantities) {
        if (quantityName == e.lastQuantity) start = true;
        if (!start) continue;
        const quantity = quantities[quantityName];
        queue.push(e.create(quantity, false));
        queue.push(e.create(quantity, true));
      }
    }
  }
  return minCombinations;
};