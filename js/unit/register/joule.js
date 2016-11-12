const DerivedUnit = require('../derived_unit');

const type = 'joule';

module.exports = () => {
  DerivedUnit.register(type, 'J', [['mass', 'kg'], ['length', 'm'], ['length', 'm']], [['time', 's'], ['time', 's']]);
};