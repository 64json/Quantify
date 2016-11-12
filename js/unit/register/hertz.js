const DerivedUnit = require('../derived_unit');

const type = 'hertz';

module.exports = () => {
  DerivedUnit.register(type, 'Hz', [], [['time', 's']]);
};