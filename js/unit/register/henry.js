const DerivedUnit = require('../derived_unit');

const type = 'henry';

module.exports = () => {
  DerivedUnit.register(type, 'henry', 'H', 1, [['mass', 'kg'], ['length', 'm'], ['length', 'm']], [['time', 's'], ['time', 's'], ['current', 'A'], ['current', 'A']]);
  DerivedUnit.registerCommonSIPrefixes(type, 'H');
  DerivedUnit.registerUncommonSIPrefixes(type, 'H');
};