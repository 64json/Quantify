const DerivedUnit = require('../derived_unit');

const type = 'hertz';

module.exports = () => {
  DerivedUnit.register(type, 'Hz', [], [['time', 's']]);
  DerivedUnit.register(type, 'KHz', [], [], 1e3, 'Hz');
  DerivedUnit.register(type, 'MHz', [], [], 1e6, 'Hz');
  DerivedUnit.register(type, 'GHz', [], [], 1e9, 'Hz');
  DerivedUnit.register(type, 'mHz', [], [], 1e-3, 'Hz');
  DerivedUnit.register(type, 'μHz', [], [], 1e-6, 'Hz');
  DerivedUnit.register(type, 'nHz', [], [], 1e-9, 'Hz');
};