const {extend} = $;

module.exports = function () {
  this.units = {};

  this.addUnit = (Unit) => {
    const type = Unit.TYPE;
    const symbol = Unit.SYMBOL;
    if (!(type in this.units)) {
      this.units[type] = {};
    }
    this.units[type][symbol] = Unit;
  };

  this.getUnit = (type, symbol) => {
    return this.units[type][symbol];
  };

  this.getDerivedQuantities = () => {
    const quantities = {};
    for (const quantityName in this.units) {
      const units = this.units[quantityName];
      const unit = units[Object.keys(units)[0]];
      if (unit.BASE) continue;
      quantities[quantityName] = {
        name: quantityName,
        types: unit.UNITLESS.types
      }
    }
    return quantities;
  };

  this.getUnits = (q) => {
    if (q == true) return this.units;
    if (q) return this.units[q];
    const units = {};
    for (const quantity in this.units) {
      extend(true, units, this.units[quantity]);
    }
    return units;
  };

  this.getStandardUnit = (quantity) => {
    const units = this.units[quantity];
    for (const symbol in units) {
      let unit = units[symbol];
      if (unit.STANDARD) {
        return unit;
      }
    }
    return units[Object.keys(units)[0]];
  }
};