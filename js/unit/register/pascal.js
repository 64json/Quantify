const DerivedUnit = require('../derived_unit');

const type = 'pascal';

module.exports = () => {
  DerivedUnit.register(type, 'pascal', 'Pa', [['mass', 'Kg']], [['length', 'm'], ['time', 's'], ['time', 's']]);
  DerivedUnit.register(type, 'Kilo pascal', 'KPa', [], [], 1e3, 'Pa');
  DerivedUnit.register(type, 'bar', 'bar', [], [], 1e5, 'Pa');
  DerivedUnit.register(type, 'Mega pascal', 'MPa', [], [], 1e6, 'Pa');
  DerivedUnit.register(type, 'Giga pascal', 'GPa', [], [], 1e9, 'Pa');
  DerivedUnit.register(type, 'milli pascal', 'mPa', [], [], 1e-3, 'Pa');
  DerivedUnit.register(type, 'micro pascal', 'μPa', [], [], 1e-6, 'Pa');
  DerivedUnit.register(type, 'nano pascal', 'nPa', [], [], 1e-9, 'Pa');
  DerivedUnit.register(type, 'atmosphere', 'atm', [], [], 101325, 'Pa');

};