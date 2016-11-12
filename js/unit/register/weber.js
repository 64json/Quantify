const DerivedUnit = require('../derived_unit');

const type = 'weber';

module.exports = () => {
  DerivedUnit.register(type, 'Wb', [['mass', 'kg'], ['length', 'm'], ['length', 'm']], [['time', 's'], ['time', 's'],['current','A']]);
};