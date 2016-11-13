const DerivedUnit = require('../derived_unit');

const type = 'Newton';

module.exports = () => {
  DerivedUnit.register(type, 'Newtons', 'N', [['mass', 'kg'], ['length', 'm']], [['time', 's'], ['time', 's']]);
  DerivedUnit.register(type, 'Kilo Newtons', 'KN', [], [], 1e3, 'N');
  DerivedUnit.register(type, 'Mega Newtons', 'MN', [], [], 1e6, 'N');
  DerivedUnit.register(type, 'Giga Newtons', 'GN', [], [], 1e9, 'N');
  DerivedUnit.register(type, 'milli Newtons', 'mN', [], [], 1e-3, 'N');
  DerivedUnit.register(type, 'micro Newtons', 'μN', [], [], 1e-6, 'N');
  DerivedUnit.register(type, 'nano Newtons', 'nN', [], [], 1e-9, 'N');

};