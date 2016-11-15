const DerivedUnit = require('../derived_unit');

const type = 'force';

module.exports = () => {
  DerivedUnit.register(type, 'newton', 'N', 1, [['mass', 'kg'], ['length', 'm']], [['time', 's'], ['time', 's']]);
  DerivedUnit.registerCommonSIPrefixes(type, 'N');
  DerivedUnit.registerUncommonSIPrefixes(type, 'N');
};