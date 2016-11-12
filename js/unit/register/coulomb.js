const DerivedUnit = require('../derived_unit');

const type = 'coulomb';

module.exports = () => {
  DerivedUnit.register(type, 'J', [['current', 'A'], ['time', 's']], []);
};