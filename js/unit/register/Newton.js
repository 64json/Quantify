const DerivedUnit = require('../derived_unit');

const type = 'Newton';

module.exports = () => {
  DerivedUnit.register(type, 'N', [['mass', 'kg'], ['length', 'm']], [['time', 's'], ['time', 's']]);
  DerivedUnit.register(type, 'KN', [], [], 1e3, 'N');
  DerivedUnit.register(type, 'MN', [], [], 1e6, 'N');
  DerivedUnit.register(type, 'GN', [], [], 1e9, 'N');
  DerivedUnit.register(type, 'mN', [], [], 1e-3, 'N');
  DerivedUnit.register(type, 'μN', [], [], 1e-6, 'N');
  DerivedUnit.register(type, 'nN', [], [], 1e-9, 'N');

};