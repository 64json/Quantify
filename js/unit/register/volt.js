const DerivedUnit = require('../derived_unit');

const type = 'volt';

module.exports = () => {
  DerivedUnit.register(type, 'V', [['mass', 'kg'], ['length', 'm'], ['length', 'm']], [['time', 's'],['time', 's'], ['time', 's'],['current', 'A']]);
};