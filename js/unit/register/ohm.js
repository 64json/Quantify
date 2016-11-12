const DerivedUnit = require('../derived_unit');

const type = 'ohm';

module.exports = () => {
  DerivedUnit.register(type, 'Ω', [['mass', 'kg'], ['length', 'm'], ['length', 'm']], [['time', 's'], ['time', 's'],['time', 's'],['current', 'A'],['current', 'A']]);
  DerivedUnit.register(type, 'KΩ', [], [], 1e3, 'Ω');
  DerivedUnit.register(type, 'MΩ', [], [], 1e6, 'Ω');
  DerivedUnit.register(type, 'GΩ', [], [], 1e9, 'Ω');
  DerivedUnit.register(type, 'mΩ', [], [], 1e-3, 'Ω');
  DerivedUnit.register(type, 'μΩ', [], [], 1e-6, 'Ω');
  DerivedUnit.register(type, 'nΩ', [], [], 1e-9, 'Ω');
};