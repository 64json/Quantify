const Util = require('../util');
const app = require('../app');

const {extend} = $;

class Combination {
  constructor(mulTypes, divTypes, unitless, countCalculation = true) {
    this.mulTypes = mulTypes;
    this.divTypes = divTypes;
    this.unitless = unitless;
    if (countCalculation) this.calculateCount();
  }

  calculateCount() {
    var count = this.mulTypes.length + this.divTypes.length;
    for (const type in this.unitless.types) {
      count += Math.abs(this.unitless.types[type]);
    }
    this.count = count;
  }

  createMulClassAdded(mulClass) {
    const new_ = new Combination(this.mulTypes.slice(), this.divTypes.slice(), extend(true, {}, this.unitless), false);
    new_.mulTypes.push(mulClass.TYPE);
    const unitless = mulClass.UNITLESS;
    for (const type in unitless.types) {
      if (!new_.unitless.types.hasOwnProperty(type)) {
        new_.unitless.types[type] = +unitless.types[type];
      } else {
        new_.unitless.types[type] += unitless.types[type];
      }
      if (new_.unitless.types[type] == 0) {
        delete unitless.types[type];
      }
    }
    new_.unitless.quantity *= unitless.quantity;
    new_.calculateCount();
    return new_;
  }

  createDivClassAdded(divClass) {
    const new_ = new Combination(this.mulTypes.slice(), this.divTypes.slice(), extend(true, {}, this.unitless), false);
    new_.divTypes.push(divClass.TYPE);
    const unitless = divClass.UNITLESS;
    for (const type in unitless.types) {
      if (!new_.unitless.types.hasOwnProperty(type)) {
        new_.unitless.types[type] = -unitless.types[type];
      } else {
        new_.unitless.types[type] -= unitless.types[type];
      }
      if (new_.unitless.types[type] == 0) {
        delete unitless.types[type];
      }
    }
    new_.unitless.quantity /= unitless.quantity;
    new_.calculateCount();
    return new_;
  }
}

module.exports = (str) => {
  const value = 1;
  const mulSymbols = ['lb', 'm', 'm'];
  const divSymbols = ['s', 's'];

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
  const queue = [new Combination([], [], unitless)];

  const derivedUnitClasses = app.getDerivedUnitClasses();
  console.log(derivedUnitClasses);
  var minCount = 0x7fffffff;
  var minCombinations = [];
  while (queue.length > 0) {
    const e = queue.shift();
    console.log(e);
    if (minCount > e.count) {
      minCount = e.count;
      minCombinations = [e];
    } else if (minCount == e.count) {
      minCombinations.push(e);
    }
    if (e.mulTypes.length + e.divTypes.length < 1) {
      for (const unitSymbol in derivedUnitClasses) {
        const unitClass = derivedUnitClasses[unitSymbol];
        queue.push(e.createMulClassAdded(unitClass));
        queue.push(e.createDivClassAdded(unitClass));
      }
    }
  }
  console.log(minCombinations);
};