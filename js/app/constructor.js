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

  this.getDerivedQuantities = () => {
    const quantities = {};
    for (const quantityName in this.unitClasses) {
      const unitClasses = this.unitClasses[quantityName];
      const unitClass = unitClasses[Object.keys(unitClasses)[0]];
      if (unitClass.BASE) continue;
      quantities[quantityName] = {
        name: quantityName,
        types: unitClass.UNITLESS.types
      }
    }
    return quantities;
  };

  this.getUnitClasses = () => {
    const unitClasses = {};
    for (const quantity in this.unitClasses) {
      extend(true, unitClasses, this.unitClasses[quantity]);
    }
    return unitClasses;
  };

  this.getStandardUnitClass = (quantity) => {
    const unitClasses = this.unitClasses[quantity];
    for (const symbol in unitClasses) {
      const unitClass = unitClasses[symbol];
      if (unitClass.QUANTITY == 1) {
        return unitClass;
      }
    }
    return null;
  }
};