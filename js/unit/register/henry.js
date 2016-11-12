const DerivedUnit = require('../derived_unit');

const type = 'henry';

module.exports = () => {
  DerivedUnit.register(type, 'H', [['mass', 'kg'], ['length', 'm'], ['length', 'm']], [['time', 's'], ['time', 's'],['current','A'],['current','A']]);
  DerivedUnit.register(type, 'KH', [], [], 1e3, 'H');
  DerivedUnit.register(type, 'MH', [], [], 1e6, 'H');
  DerivedUnit.register(type, 'GH', [], [], 1e9, 'H');
  DerivedUnit.register(type, 'mH', [], [], 1e-3, 'H');
  DerivedUnit.register(type, 'μH', [], [], 1e-6, 'H');
  DerivedUnit.register(type, 'nH', [], [], 1e-9, 'H');
};