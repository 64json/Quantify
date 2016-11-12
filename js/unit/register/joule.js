const DerivedUnit = require('../derived_unit');

const type = 'joule';

module.exports = () => {
  DerivedUnit.register(type, 'J', [['mass', 'kg'], ['length', 'm'], ['length', 'm']], [['time', 's'], ['time', 's']]);
  DerivedUnit.register(type, 'KJ', [], [], 1e3, 'J');
  DerivedUnit.register(type, 'MJ', [], [], 1e6, 'J');
  DerivedUnit.register(type, 'GJ', [], [], 1e9, 'J');
  DerivedUnit.register(type, 'mJ', [], [], 1e-3, 'J');
  DerivedUnit.register(type, 'μJ', [], [], 1e-6, 'J');
  DerivedUnit.register(type, 'nJ', [], [], 1e-9, 'J');
};