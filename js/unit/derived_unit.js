const app = require('../app');
const BaseUnit = require('./base_unit');

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

DerivedUnit.register = (type, symbol, muls, divs) => {
  const mulClasses = [];
  const divClasses = [];

  const queue = [];
  muls.forEach(mul => {
    const type = mul[0];
    const symbol = mul[1];
    queue.push({
      cls: app.getUnitClass(type, symbol),
      inverse: false
    });
  });
  divs.forEach(div => {
    const type = div[0];
    const symbol = div[1];
    queue.push({
      cls: app.getUnitClass(type, symbol),
      inverse: true
    });
  });

  while (queue.length > 0) {
    const e = queue.shift();
    if (e.cls.BASE) {
      (e.inverse ? divClasses : mulClasses).push(e.cls);
    } else {
      e.cls.MULS.forEach(mulClass => {
        queue.push({
          cls: mulClass,
          inverse: e.inverse
        });
      });
      e.cls.DIVS.forEach(divClass => {
        queue.push({
          cls: divClass,
          inverse: !e.inverse
        });
      });
    }
  }

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