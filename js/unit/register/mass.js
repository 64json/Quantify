const BaseUnit = require('../base_unit');

const type = 'mass';

module.exports = () => {
  BaseUnit.register(type, 'grams', 'g', 1);
  BaseUnit.registerCommonSIPrefixes(type, 'g');
  BaseUnit.register(type, 'pounds', 'lb', 453.59237, 'g');
  BaseUnit.register(type, 'ounces', 'oz', 0.0625, 'lb');
  BaseUnit.registerUncommonSIPrefixes(type, 'g');
};