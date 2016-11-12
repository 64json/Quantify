const DerivedUnit = require('../derived_unit');

const type = 'siemens';

module.exports = () => {
  DerivedUnit.register(type, 'S', [['time', 's'], ['time', 's'],['time', 's'],['current', 'A'],['current', 'A']], [['mass', 'kg'], ['length', 'm'], ['length', 'm']]);
};