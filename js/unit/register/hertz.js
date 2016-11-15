const DerivedUnit = require('../derived_unit');

const type = 'hertz';

module.exports = () => {
  DerivedUnit.register(type, 'hertz', 'Hz', 1, [], [['time', 's']]);
  DerivedUnit.registerCommonSIPrefixes(type, 'Hz');
  DerivedUnit.registerUncommonSIPrefixes(type, 'Hz');
};