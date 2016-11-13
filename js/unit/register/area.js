const DerivedUnit = require('../derived_unit');

const type = 'area';

module.exports = () => {
  DerivedUnit.register(type, 'acre', 'acre', [['length', 'm'], ['length', 'm']], [], 4046.86);
  DerivedUnit.register(type, 'hectare', 'ha', [['length', 'm'], ['length', 'm']], [], 10000);
};