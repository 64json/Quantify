const DerivedUnit = require('../derived_unit');

const type = 'pascal';

module.exports = () => {
  DerivedUnit.register(type, 'Pa', [['mass', 'kg']], [['length', 'm'],['time', 's'], ['time', 's']]);
  DerivedUnit.register(type, 'KPa', [], [], 1e3, 'Pa');
  DerivedUnit.register(type, 'MPa', [], [], 1e6, 'Pa');
  DerivedUnit.register(type, 'GPa', [], [], 1e9, 'Pa');
  DerivedUnit.register(type, 'mPa', [], [], 1e-3, 'Pa');
  DerivedUnit.register(type, 'μPa', [], [], 1e-6, 'Pa');
  DerivedUnit.register(type, 'nPa', [], [], 1e-9, 'Pa');
};