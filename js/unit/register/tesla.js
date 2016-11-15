const DerivedUnit = require('../derived_unit');

const type = 'telsa';

module.exports = () => {
  DerivedUnit.register(type, 'telsa', 'T', [['mass', 'kg']], [['time', 's'], ['time', 's'], ['current', 'A']]);
  DerivedUnit.registerCommonSIPrefixes(type, 'T');
  DerivedUnit.registerUncommonSIPrefixes(type, 'T');
};