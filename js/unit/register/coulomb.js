const DerivedUnit = require('../derived_unit');

const type = 'coulomb';

module.exports = () => {
  DerivedUnit.register(type, 'coulomb', 'C', 1, [['current', 'A'], ['time', 's']], []);
  DerivedUnit.registerCommonSIPrefixes(type, 'C');
  DerivedUnit.registerUncommonSIPrefixes(type, 'C');
};