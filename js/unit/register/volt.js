const DerivedUnit = require('../derived_unit');

const type = 'volt';

module.exports = () => {
  DerivedUnit.register(type, 'volt', 'V', [['mass', 'Kg'], ['length', 'm'], ['length', 'm']], [['time', 's'], ['time', 's'], ['time', 's'], ['current', 'A']]);
  DerivedUnit.register(type, 'Kilo volt', 'KV', [], [], 1e3, 'V');
  DerivedUnit.register(type, 'Mega volt', 'MV', [], [], 1e6, 'V');
  DerivedUnit.register(type, 'Giga volt', 'GV', [], [], 1e9, 'V');
  DerivedUnit.register(type, 'milli volt', 'mV', [], [], 1e-3, 'V');
  DerivedUnit.register(type, 'micro volt', 'μV', [], [], 1e-6, 'V');
  DerivedUnit.register(type, 'nano volt', 'nV', [], [], 1e-9, 'V');
};