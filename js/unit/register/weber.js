const DerivedUnit = require('../derived_unit');

const type = 'weber';

module.exports = () => {
  DerivedUnit.register(type, 'Wb', [['mass', 'kg'], ['length', 'm'], ['length', 'm']], [['time', 's'], ['time', 's'],['current','A']]);
  DerivedUnit.register(type, 'KWb', [], [], 1e3, 'Wb');
  DerivedUnit.register(type, 'MWb', [], [], 1e6, 'Wb');
  DerivedUnit.register(type, 'GWb', [], [], 1e9, 'Wb');
  DerivedUnit.register(type, 'mWb', [], [], 1e-3, 'Wb');
  DerivedUnit.register(type, 'μWb', [], [], 1e-6, 'Wb');
  DerivedUnit.register(type, 'nWb', [], [], 1e-9, 'Wb');
};