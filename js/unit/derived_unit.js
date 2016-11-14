const app = require('../app');
const Server = require('../server');

const {extend} = $;

const DerivedUnit = {
  BASE: false,
  QUANTITY: 1,
  MULS: [],
  DIVS: [],
};

DerivedUnit.register = (type, name, symbol, mulPairs, divPairs, quantity = 1, parentSymbol = null) => {
  const ParentUnit = parentSymbol ? app.getUnit(type, parentSymbol) : DerivedUnit;

  let {muls, divs} = Server.getMulsAndDivs(mulPairs, divPairs);
  muls = ParentUnit.MULS.concat(muls);
  divs = ParentUnit.DIVS.concat(divs);

  const unitless = Server.getUnitless(muls, divs);
  unitless.quantity *= quantity;

  const Unit = extend(true, {}, DerivedUnit, {
    TYPE: type,
    NAME: name,
    SYMBOL: symbol,
    MULS: muls,
    DIVS: divs,
    QUANTITY: unitless.quantity,
    UNITLESS: unitless,
    STANDARD: parentSymbol == null
  });

  app.addUnit(Unit);
};

module.exports = DerivedUnit;