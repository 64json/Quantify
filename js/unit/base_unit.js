const app = require('../app');

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

module.exports = BaseUnit;