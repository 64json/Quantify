const DerivedUnit = require('../derived_unit');

const type = 'telsa';

module.exports = () => {
  DerivedUnit.register(type, 'T', [['mass', 'kg']], [['time', 's'], ['time', 's'],['current','A']]);
};