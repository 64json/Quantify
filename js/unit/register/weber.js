const DerivedUnit = require('../derived_unit');

const type = 'weber';

module.exports = () => {
  DerivedUnit.register(type, 'weber', 'Wb', [['mass', 'kg'], ['length', 'm'], ['length', 'm']], [['time', 's'], ['time', 's'], ['current', 'A']]);
  DerivedUnit.register(type, 'Kilo weber', 'KWb', [], [], 1e3, 'Wb');
  DerivedUnit.register(type, 'Mega weber', 'MWb', [], [], 1e6, 'Wb');
  DerivedUnit.register(type, 'Giga weber', 'GWb', [], [], 1e9, 'Wb');
  DerivedUnit.register(type, 'milli weber', 'mWb', [], [], 1e-3, 'Wb');
  DerivedUnit.register(type, 'micro weber', 'μWb', [], [], 1e-6, 'Wb');
  DerivedUnit.register(type, 'nano weber', 'nWb', [], [], 1e-9, 'Wb');
};