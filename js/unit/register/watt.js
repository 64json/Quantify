const DerivedUnit = require('../derived_unit');

const type = 'watt';

module.exports = () => {
  DerivedUnit.register(type, 'watt', 'W', 1, [['mass', 'kg'], ['length', 'm'], ['length', 'm']], [['time', 's'], ['time', 's'], ['time', 's']]);
  DerivedUnit.registerCommonSIPrefixes(type, 'W');
  DerivedUnit.registerUncommonSIPrefixes(type, 'W');
};