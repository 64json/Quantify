const DerivedUnit = require('../derived_unit');

const type = 'siemens';

module.exports = () => {
  DerivedUnit.register(type, 'S', [['time', 's'], ['time', 's'],['time', 's'],['current', 'A'],['current', 'A']], [['mass', 'kg'], ['length', 'm'], ['length', 'm']]);
  DerivedUnit.register(type, 'KS', [], [], 1e3, 'S');
  DerivedUnit.register(type, 'MS', [], [], 1e6, 'S');
  DerivedUnit.register(type, 'GS', [], [], 1e9, 'S');
  DerivedUnit.register(type, 'mS', [], [], 1e-3, 'S');
  DerivedUnit.register(type, 'μS', [], [], 1e-6, 'S');
  DerivedUnit.register(type, 'nS', [], [], 1e-9, 'S');
};

