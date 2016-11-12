const app = require('../app');

class BaseUnit {
  constructor(value) {
    this.value = value;
  }
}

BaseUnit.BASE = BaseUnit.prototype.base = true;
BaseUnit.TYPE = BaseUnit.prototype.type = null;
BaseUnit.SYMBOL = BaseUnit.prototype.symbol = null;
BaseUnit.QUANTITY = BaseUnit.prototype.quantity = 1;

BaseUnit.register = (type, symbol, quantity, parentSymbol = null) => {
  const ParentUnit = parentSymbol ? app.getUnitClass(type, parentSymbol) : BaseUnit;

  class Unit extends ParentUnit {
    constructor(value = 1) {
      super(value);
    }
  }

  Unit.TYPE = Unit.prototype.type = type;
  Unit.SYMBOL = Unit.prototype.symbol = symbol;
  Unit.QUANTITY = Unit.prototype.quantity = ParentUnit.QUANTITY * quantity;

  app.addUnitClass(Unit);
};

module.exports = BaseUnit;