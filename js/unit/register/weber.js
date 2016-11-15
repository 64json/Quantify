const DerivedUnit = require('../derived_unit');

const type = 'weber';

module.exports = () => {
  DerivedUnit.register(type, 'weber', 'Wb', 1, [['mass', 'kg'], ['length', 'm'], ['length', 'm']], [['time', 's'], ['time', 's'], ['current', 'A']]);
  DerivedUnit.registerCommonSIPrefixes(type, 'Wb');
  DerivedUnit.registerUncommonSIPrefixes(type, 'Wb');
};