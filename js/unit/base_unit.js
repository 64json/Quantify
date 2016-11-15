const app = require('../app');
const Server = require('../server');

const {extend} = $;

const BaseUnit = {
  BASE: true,
  QUANTITY: 1
};

BaseUnit.register = (type, name, symbol, quantity = 1, parentSymbol = null) => {
  const ParentUnit = parentSymbol ? app.getUnit(type, parentSymbol) : BaseUnit;

  quantity *= ParentUnit.QUANTITY;
  const unitless = {types: {}, quantity: quantity};
  unitless.types[type] = 1;
  unitless.quantity = quantity;

  const Unit = extend(true, {}, ParentUnit, {
    TYPE: type,
    NAME: name,
    SYMBOL: symbol,
    QUANTITY: quantity,
    UNITLESS: unitless,
    STANDARD: parentSymbol == null
  });

  app.addUnit(Unit);
};

BaseUnit.registerCommonSIPrefixes = (type, parentSymbol) => {
  return registerSIPrefixes(Server.getSIPrefixes(true), type, parentSymbol);
};

BaseUnit.registerUncommonSIPrefixes = (type, parentSymbol) => {
  return registerSIPrefixes(Server.getSIPrefixes(false), type, parentSymbol);
};

const registerSIPrefixes = (prefixes, type, parentSymbol) => {
  const ParentUnit = app.getUnit(type, parentSymbol);
  for (const [quantity, symbol, name] of prefixes) {
    BaseUnit.register(type, name + ParentUnit.NAME, symbol + ParentUnit.SYMBOL, quantity, parentSymbol);
  }
};

module.exports = BaseUnit;