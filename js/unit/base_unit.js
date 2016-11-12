const app = require('../app');

class BaseUnit {
  constructor(value) {
    this.value = value;
  }
}

BaseUnit.BASE = BaseUnit.prototype.base = true;
BaseUnit.QUANTITY = BaseUnit.prototype.quantity = 1;

BaseUnit.register = (type, name, symbol, quantity = 1, parentSymbol = null) => {
  const ParentUnit = parentSymbol ? app.getUnitClass(type, parentSymbol) : BaseUnit;
  quantity *= ParentUnit.QUANTITY;

  class Unit extends ParentUnit {
    constructor(value) {
      super(value);
    }
  }

  Unit.TYPE = Unit.prototype.type = type;
  Unit.NAME = Unit.prototype.name = name;
  Unit.SYMBOL = Unit.prototype.symbol = symbol;
  Unit.QUANTITY = Unit.prototype.quantity = quantity;
  Unit.UNITLESS = {types: {}, quantity: quantity};
  Unit.UNITLESS.types[type] = 1;

  app.addUnitClass(Unit);
};

module.exports = BaseUnit;