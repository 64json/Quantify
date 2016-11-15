const app = require('../app');
const Server = require('../server');

const {extend} = $;

const DerivedUnit = {
  BASE: false,
  QUANTITY: 1,
  MULS: [],
  DIVS: [],
};

DerivedUnit.register = (type, name, symbol, quantity, arg1, arg2) => {
  var parentSymbol, divPairs, mulPairs;
  if (arg1 && arg2){
    parentSymbol = null;
    mulPairs = arg1;
    divPairs = arg2;
  } else {
    parentSymbol = arg1;
    mulPairs = [];
    divPairs = [];
  }
  const ParentUnit = parentSymbol ? app.getUnit(type, parentSymbol) : DerivedUnit;

  let {muls, divs} = Server.getMulsAndDivs(mulPairs, divPairs);
  muls = ParentUnit.MULS.concat(muls);
  divs = ParentUnit.DIVS.concat(divs);

  const unitless = Server.getUnitless(muls, divs);
  if (parentSymbol) unitless.quantity = ParentUnit.QUANTITY * quantity;
  else unitless.quantity *= quantity;

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

DerivedUnit.registerCommonSIPrefixes = (type, parentSymbol) => {
  return registerSIPrefixes(Server.getSIPrefixes(true), type, parentSymbol);
};

DerivedUnit.registerUncommonSIPrefixes = (type, parentSymbol) => {
  return registerSIPrefixes(Server.getSIPrefixes(false), type, parentSymbol);
};

const registerSIPrefixes = (prefixes, type, parentSymbol) => {
  const ParentUnit = app.getUnit(type, parentSymbol);
  for (const [quantity, symbol, name] of prefixes) {
    DerivedUnit.register(type, name + ParentUnit.NAME, symbol + ParentUnit.SYMBOL, quantity, parentSymbol);
  }
};

module.exports = DerivedUnit;