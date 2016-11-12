const DerivedUnit = require('../derived_unit');

const type = 'pascal';

module.exports = () => {
  DerivedUnit.register(type, 'Pa', [['mass', 'kg']], [['length', 'm'],['time', 's'], ['time', 's']]);
};