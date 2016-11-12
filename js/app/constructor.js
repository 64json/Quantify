const {extend} = $

module.exports = function () {
  this.unitClasses = {};

  this.addUnitClass = (Unit) => {
    const type = Unit.TYPE;
    const symbol = Unit.SYMBOL;
    if (!this.unitClasses.hasOwnProperty(type)) {
      this.unitClasses[type] = {};
    }
    this.unitClasses[type][symbol] = Unit;
  };

  this.getUnitClass = (type, symbol) => {
    return this.unitClasses[type][symbol];
  };

  this.getDerivedUnitClasses = () => {
    const unitClasses = this.getUnitClasses();
    const derivedUnitClasses = {};
    for (const unitSymbol in unitClasses) {
      const unitClass = unitClasses[unitSymbol];
      if (!unitClass.BASE) {
        derivedUnitClasses.push(unitClass);
      }
    }
    return derivedUnitClasses;
  };

  this.getUnitClasses = () => {
    const unitClasses = {};
    for (const quantity in this.unitClasses) {
      extend(true, unitClasses, this.unitClasses[quantity]);
    }
    return unitClasses;
  }
};