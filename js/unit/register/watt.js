const DerivedUnit = require('../derived_unit');

const type = 'watt';

module.exports = () => {
  DerivedUnit.register(type, 'watt', 'W', [['mass', 'kg'], ['length', 'm'], ['length', 'm']], [['time', 's'], ['time', 's'], ['time', 's']]);
  DerivedUnit.registerCommonSIPrefixes(type, 'W');
  DerivedUnit.registerUncommonSIPrefixes(type, 'W');
};