const app = require('../app');

module.exports = (symbol) => {
  const unitClasses = app.getUnitClasses();
  for (const unitSymbol in unitClasses) {
    const unitClass = unitClasses[unitSymbol];
    if (unitClass.SYMBOL == symbol) return unitClass;
  }
};