const DerivedUnit = require('../derived_unit');

const type = 'hertz';

module.exports = () => {
  DerivedUnit.register(type, 'hertz', 'Hz', [], [['time', 's']]);
  DerivedUnit.register(type, 'Kilo hertz', 'KHz', [], [], 1e3, 'Hz');
  DerivedUnit.register(type, 'Mega hertz', 'MHz', [], [], 1e6, 'Hz');
  DerivedUnit.register(type, 'Giga hertz', 'GHz', [], [], 1e9, 'Hz');
  DerivedUnit.register(type, 'milli hertz', 'mHz', [], [], 1e-3, 'Hz');
  DerivedUnit.register(type, 'micro hertz', 'μHz', [], [], 1e-6, 'Hz');
  DerivedUnit.register(type, 'nano hertz', 'nHz', [], [], 1e-9, 'Hz');
};