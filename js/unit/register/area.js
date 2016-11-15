const DerivedUnit = require('../derived_unit');

const type = 'area';

module.exports = () => {
  DerivedUnit.register(type, 'acre', 'acre', 4840, [['length', 'yd'], ['length', 'yd']], []);
  DerivedUnit.register(type, 'hectare', 'ha', 10000, [['length', 'm'], ['length', 'm']], []);
};