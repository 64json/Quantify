const DerivedUnit = require('../derived_unit');

const type = 'henry';

module.exports = () => {
  DerivedUnit.register(type, 'H', [['mass', 'kg'], ['length', 'm'], ['length', 'm']], [['time', 's'], ['time', 's'],['current','A'],['current','A']]);
};