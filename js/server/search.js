const Util = require('../util');
const app = require('../app');

module.exports = (str) => {
  const value = 1.234;
  const mulSymbols = ['kg', 'm', 'm'];
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
  const {types, quantity} = Util.getUnitless(mulClasses, divClasses);

  const unitClasses = app.getUnitClasses();
  var simpleObject = null;
  for (const unitSymbol in unitClasses) {
    const unitClass = unitClasses[unitSymbol];
    var unitless;
    if (unitClass.BASE) {
      unitless = {types: {}, quantity: unitClass.QUANTITY};
      unitless[unitClass.TYPE] = 1
    } else {
      unitless = Util.getUnitless(unitClass.MULS, unitClass.DIVS);
    }
    if (types.length == unitless.types.length) {
      var same = true;
      for (const type in types) {
        if (types[type] != unitless.types[type]) {
          same = false;
          break;
        }
      }
      if (same) {
        simpleObject = new unitClass(value * quantity / unitless.quantity);
        break;
      }
    }
  }
  console.log(simpleObject);
};