const DerivedUnit = require('../derived_unit');

const type = 'henry';

module.exports = () => {
  DerivedUnit.register(type, 'henry', 'H', [['mass', 'kg'], ['length', 'm'], ['length', 'm']], [['time', 's'], ['time', 's'], ['current', 'A'], ['current', 'A']]);
  DerivedUnit.register(type, 'Kilo henry', 'KH', [], [], 1e3, 'H');
  DerivedUnit.register(type, 'Mega henry', 'MH', [], [], 1e6, 'H');
  DerivedUnit.register(type, 'Giga henry', 'GH', [], [], 1e9, 'H');
  DerivedUnit.register(type, 'milli henry', 'mH', [], [], 1e-3, 'H');
  DerivedUnit.register(type, 'micro henry', 'μH', [], [], 1e-6, 'H');
  DerivedUnit.register(type, 'nano henry', 'nH', [], [], 1e-9, 'H');
};