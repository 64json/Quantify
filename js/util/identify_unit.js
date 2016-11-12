const app = require('../app');

module.exports = (symbol) => {
  const unitClasses = app.getUnitClasses();
  for (const quantityName in unitClasses) {
    const quantity = unitClasses[quantityName];
    for (const symbol in quantity) {
      const unitClass = quantity[symbol];
      if (unitClass.SYMBOL == symbol) return unitClass;
    }
  }
};