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

  quantity *= ParentUnit.QUANTITY;
  const unitless = Server.getUnitless(muls, divs);
  unitless.quantity = quantity;

  const Unit = extend(true, {}, DerivedUnit, {
    TYPE: type,
    NAME: name,
    SYMBOL: symbol,
    MULS: muls,
    DIVS: divs,
    QUANTITY: quantity,
    UNITLESS: unitless,
    STANDARD: parentSymbol == null
  });

  app.addUnit(Unit);
};

DerivedUnit.registerCommonSIPrefixes = (type, parentSymbol) => {
  return registerSIPrefixes(Server.getSIPrefixes(true), type, parentSymbol);
};

DerivedUnit.registerUncommonSIPrefixes = (type, parentSymbol) => {
  return registerSIPrefixes(Server.getSIPrefixes(false), type, parentSymbol);
};

const registerSIPrefixes = (prefixes, type, parentSymbol) => {
  const ParentUnit = app.getUnit(type, parentSymbol);
  for (const [quantity, symbol, name] of prefixes) {
    DerivedUnit.register(type, name + ParentUnit.NAME, symbol + ParentUnit.SYMBOL, [], [], quantity, parentSymbol);
  }
};

module.exports = DerivedUnit;