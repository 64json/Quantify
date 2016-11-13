const app = require('../app');
const Server = require('../server');

class DerivedUnit {
  constructor(value) {
    this.value = value;
  }
}

DerivedUnit.BASE = DerivedUnit.prototype.base = false;
DerivedUnit.QUANTITY = DerivedUnit.prototype.quantity = 1;
DerivedUnit.MULS = DerivedUnit.prototype.muls = [];
DerivedUnit.DIVS = DerivedUnit.prototype.divs = [];

DerivedUnit.register = (type, name, symbol, mulPairs, divPairs, quantity = 1, parentSymbol = null) => {
  var {mulClasses, divClasses} = Server.getMulAndDivClasses(mulPairs, divPairs);

  const ParentUnit = parentSymbol ? app.getUnitClass(type, parentSymbol) : DerivedUnit;
  quantity *= ParentUnit.QUANTITY;
  for (const mulClass of mulClasses) quantity *= mulClass.QUANTITY;
  for (const divClass of divClasses) quantity /= divClass.QUANTITY;
  mulClasses = ParentUnit.MULS.concat(mulClasses);
  divClasses = ParentUnit.DIVS.concat(divClasses);

  class Unit extends ParentUnit {
    constructor(value) {
      super(value);
    }
  }

  Unit.TYPE = Unit.prototype.type = type;
  Unit.NAME = Unit.prototype.name = name;
  Unit.SYMBOL = Unit.prototype.symbol = symbol;
  Unit.MULS = Unit.prototype.muls = mulClasses;
  Unit.DIVS = Unit.prototype.divs = divClasses;
  Unit.QUANTITY = Unit.prototype.quantity = quantity;
  Unit.UNITLESS = Server.getUnitless(mulClasses, divClasses);
  Unit.UNITLESS.quantity = quantity;

  app.addUnitClass(Unit);
};

module.exports = DerivedUnit;