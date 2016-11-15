const DerivedUnit = require('../derived_unit');

const type = 'volt';

module.exports = () => {
  DerivedUnit.register(type, 'volt', 'V', [['mass', 'kg'], ['length', 'm'], ['length', 'm']], [['time', 's'], ['time', 's'], ['time', 's'], ['current', 'A']]);
  DerivedUnit.registerCommonSIPrefixes(type, 'V');
  DerivedUnit.registerUncommonSIPrefixes(type, 'V');
};