const app = require('../app');
const Util = require('../util');

class DerivedUnit {
  constructor(value) {
    this.value = value;
  }
}

DerivedUnit.BASE = DerivedUnit.prototype.base = false;
DerivedUnit.TYPE = DerivedUnit.prototype.type = null;
DerivedUnit.SYMBOL = DerivedUnit.prototype.symbol = null;
DerivedUnit.MULS = DerivedUnit.prototype.muls = [];
DerivedUnit.DIVS = DerivedUnit.prototype.divs = [];

DerivedUnit.register = (type, symbol, mulPairs, divPairs) => {
  const {mulClasses, divClasses} = Util.getMulAndDivClasses(mulPairs, divPairs);

  class Unit extends DerivedUnit {
    constructor(value = 1) {
      super(value);
    }
  }

  Unit.TYPE = Unit.prototype.type = type;
  Unit.SYMBOL = Unit.prototype.symbol = symbol;
  Unit.MULS = Unit.prototype.muls = mulClasses;
  Unit.DIVS = Unit.prototype.divs = divClasses;

  app.addUnitClass(Unit);
};

module.exports = DerivedUnit;