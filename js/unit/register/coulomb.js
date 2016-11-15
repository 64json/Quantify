const DerivedUnit = require('../derived_unit');

const type = 'coulomb';

module.exports = () => {
  DerivedUnit.register(type, 'coulomb', 'C', [['current', 'A'], ['time', 's']], []);
  DerivedUnit.registerCommonSIPrefixes(type, 'C');
  DerivedUnit.registerUncommonSIPrefixes(type, 'C');
};