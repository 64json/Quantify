const DerivedUnit = require('../derived_unit');

const type = 'watt';

module.exports = () => {
  DerivedUnit.register(type, 'watt', 'W', [['mass', 'kg'], ['length', 'm'], ['length', 'm']], [['time', 's'], ['time', 's'], ['time', 's']]);
  DerivedUnit.register(type, 'Kilo watt', 'KW', [], [], 1e3, 'W');
  DerivedUnit.register(type, 'Mega watt', 'MW', [], [], 1e6, 'W');
  DerivedUnit.register(type, 'Giga watt', 'GW', [], [], 1e9, 'W');
  DerivedUnit.register(type, 'milli watt', 'mW', [], [], 1e-3, 'W');
  DerivedUnit.register(type, 'micro watt', 'μW', [], [], 1e-6, 'W');
  DerivedUnit.register(type, 'nano watt', 'nW', [], [], 1e-9, 'W');
};