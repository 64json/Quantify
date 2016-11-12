const DerivedUnit = require('../derived_unit');

const type = 'Newton';

module.exports = () => {
  DerivedUnit.register(type, 'N', [['mass', 'kg'], ['length', 'm']], [['time', 's'], ['time', 's']]);
};