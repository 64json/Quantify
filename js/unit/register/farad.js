const DerivedUnit = require('../derived_unit');

const type = 'farad';

module.exports = () => {
  DerivedUnit.register(type, 'F', [['time', 's'], ['time', 's'], ['time', 's'],['time', 's'],['current','A'],['current','A']], [['mass', 'kg'], ['length', 'm'],['length', 'm']]);
};