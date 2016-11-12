const DerivedUnit = require('../derived_unit');

const type = 'ohm';

module.exports = () => {
  DerivedUnit.register(type, 'Ω', [['mass', 'kg'], ['length', 'm'], ['length', 'm']], [['time', 's'], ['time', 's'],['time', 's'],['current', 'A'],['current', 'A']]);
};