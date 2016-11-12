const DerivedUnit = require('../derived_unit');

const type = 'speed';

module.exports = () => {
  DerivedUnit.register(type, 'm/s', [['length', 'm']], [['time', 's']]);
};