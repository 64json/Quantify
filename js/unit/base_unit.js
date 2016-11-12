const app = require('../app');

const type = null;
const symbol = null;
const quantity = 1;

class BaseUnit {
  constructor(value) {
    this.value = value;
  }
}

BaseUnit.TYPE = BaseUnit.prototype.type = type;
BaseUnit.SYMBOL = BaseUnit.prototype.symbol = symbol;
BaseUnit.QUANTITY = BaseUnit.prototype.quantity = quantity;

BaseUnit.register = (type, symbol, quantity, parent = null) => {
  var ParentUnit = parent ? app.getUnitClass(type, parent) : BaseUnit;

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