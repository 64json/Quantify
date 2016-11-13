const app = require('../app/index');

module.exports = (symbol) => {
  const unitClasses = app.getUnitClasses();
  for (const unitSymbol in unitClasses) {
    const unitClass = unitClasses[unitSymbol];
    if (unitClass.SYMBOL == symbol) return unitClass;
  }
};