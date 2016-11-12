const DerivedUnit = require('../derived_unit');

const type = 'volt';

module.exports = () => {
  DerivedUnit.register(type, 'V', [['mass', 'kg'], ['length', 'm'], ['length', 'm']], [['time', 's'],['time', 's'], ['time', 's'],['current', 'A']]);
  DerivedUnit.register(type, 'KV', [], [], 1e3, 'V');
  DerivedUnit.register(type, 'MV', [], [], 1e6, 'V');
  DerivedUnit.register(type, 'GV', [], [], 1e9, 'V');
  DerivedUnit.register(type, 'mV', [], [], 1e-3, 'V');
  DerivedUnit.register(type, 'μV', [], [], 1e-6, 'V');
  DerivedUnit.register(type, 'nV', [], [], 1e-9, 'V');
};