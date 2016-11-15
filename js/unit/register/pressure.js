const DerivedUnit = require('../derived_unit');

const type = 'pressure';

module.exports = () => {
  DerivedUnit.register(type, 'pascal', 'Pa', 1, [['mass', 'kg']], [['length', 'm'], ['time', 's'], ['time', 's']]);
  DerivedUnit.register(type, 'bar', 'bar', 1e5, 'Pa');
  DerivedUnit.registerCommonSIPrefixes(type, 'Pa');
  DerivedUnit.register(type, 'atmosphere', 'atm', 101325, 'Pa');
  DerivedUnit.registerUncommonSIPrefixes(type, 'Pa');
};