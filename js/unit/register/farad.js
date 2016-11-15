const DerivedUnit = require('../derived_unit');

const type = 'farad';

module.exports = () => {
  DerivedUnit.register(type, 'farad', 'F', [['time', 's'], ['time', 's'], ['time', 's'], ['time', 's'], ['current', 'A'], ['current', 'A']], [['mass', 'kg'], ['length', 'm'], ['length', 'm']]);
  DerivedUnit.registerCommonSIPrefixes(type, 'F');
  DerivedUnit.registerUncommonSIPrefixes(type, 'F');
};