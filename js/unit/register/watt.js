const DerivedUnit = require('../derived_unit');

const type = 'watt';

module.exports = () => {
  DerivedUnit.register(type, 'W', [['mass', 'kg'], ['length', 'm'], ['length', 'm']], [['time', 's'], ['time', 's'],['time', 's']]);
  DerivedUnit.register(type, 'KW', [], [], 1e3, 'W');
  DerivedUnit.register(type, 'MW', [], [], 1e6, 'W');
  DerivedUnit.register(type, 'GW', [], [], 1e9, 'W');
  DerivedUnit.register(type, 'mW', [], [], 1e-3, 'W');
  DerivedUnit.register(type, 'μW', [], [], 1e-6, 'W');
  DerivedUnit.register(type, 'nW', [], [], 1e-9, 'W');
};