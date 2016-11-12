const DerivedUnit = require('../derived_unit');

const type = 'lux';

module.exports = () => {
  DerivedUnit.register(type, 'lx', [['intensity', 'cd']], [['length', 'm'], ['length', 'm']]);
};