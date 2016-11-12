const DerivedUnit = require('../derived_unit');

const type = 'telsa';

module.exports = () => {
  DerivedUnit.register(type, 'T', [['mass', 'kg']], [['time', 's'], ['time', 's'],['current','A']]);
  DerivedUnit.register(type, 'KT', [], [], 1e3, 'T');
  DerivedUnit.register(type, 'MT', [], [], 1e6, 'T');
  DerivedUnit.register(type, 'GT', [], [], 1e9, 'T');
  DerivedUnit.register(type, 'mT', [], [], 1e-3, 'T');
  DerivedUnit.register(type, 'μT', [], [], 1e-6, 'T');
  DerivedUnit.register(type, 'nT', [], [], 1e-9, 'T');
};