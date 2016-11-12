const Util = require('../util');
const app = require('../app');

const {extend} = $;

class Combination {
  constructor(derivedQuantities, baseQuantities, countCalculation = true) {
    this.derivedQuantities = derivedQuantities;
    this.baseQuantities = baseQuantities;
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
    const new_ = new Combination(extend(true, {}, this.derivedQuantities), extend(true, {}, this.baseQuantities), false);

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

module.exports = (str) => {
  const value = 1;
  const mulSymbols = ['N', 's', 's'];
  const divSymbols = [];

  const mulPairs = [];
  const divPairs = [];
  mulSymbols.forEach(mul => {
    const mulClass = Util.identifyUnit(mul);
    mulPairs.push([mulClass.TYPE, mulClass.SYMBOL]);
  });
  divSymbols.forEach(div => {
    const divClass = Util.identifyUnit(div);
    divPairs.push([divClass.TYPE, divClass.SYMBOL]);
  });

  const {mulClasses, divClasses} = Util.getMulAndDivClasses(mulPairs, divPairs);
  const unitless = Util.getUnitless(mulClasses, divClasses);
  const queue = [new Combination({}, unitless.types)];

  const quantities = app.getDerivedQuantities();
  console.log(quantities);
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
      for (const quantityName in quantities) {
        const quantity = quantities[quantityName];
        queue.push(e.create(quantity, false));
        queue.push(e.create(quantity, true));
      }
    }
  }
  console.log(minCombinations);
};