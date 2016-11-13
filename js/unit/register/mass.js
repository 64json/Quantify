const BaseUnit = require('../base_unit');

const type = 'mass';

module.exports = () => {
  BaseUnit.register(type, 'grams', 'g', 1);
  BaseUnit.register(type, 'deci grams', 'dg', 1e-1, 'g');
  BaseUnit.register(type, 'centi grams', 'cg', 1e-2, 'g');
  BaseUnit.register(type, 'kilo grams', 'kg', 1e3, 'g');
  BaseUnit.register(type, 'milli grams', 'mg', 1e-3, 'g');
  BaseUnit.register(type, 'nano grams', 'ng', 1e-9, 'g');
  BaseUnit.register(type, 'pico grams', 'pg', 1e-12, 'g');
  BaseUnit.register(type, 'pounds', 'lb', 453.59237, 'g');
  BaseUnit.register(type, 'ounces', 'oz', 0.0625, 'lb');
};