const app = require('../app/index');

module.exports = (symbol) => {
  const units = app.getUnits();
  for (const unitSymbol in units) {
    const unit = units[unitSymbol];
    if (unit.SYMBOL == symbol) return unit;
  }
};