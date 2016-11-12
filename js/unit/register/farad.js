const DerivedUnit = require('../derived_unit');

const type = 'farad';

module.exports = () => {
  DerivedUnit.register(type, 'F', [['time', 's'], ['time', 's'], ['time', 's'],['time', 's'],['current','A'],['current','A']], [['mass', 'kg'], ['length', 'm'],['length', 'm']]);
  DerivedUnit.register(type, 'KF', [], [], 1e3, 'F');
  DerivedUnit.register(type, 'MF', [], [], 1e6, 'F');
  DerivedUnit.register(type, 'GF', [], [], 1e9, 'F');
  DerivedUnit.register(type, 'mF', [], [], 1e-3, 'F');
  DerivedUnit.register(type, 'μF', [], [], 1e-6, 'F');
  DerivedUnit.register(type, 'nF', [], [], 1e-9, 'F');
};