const DerivedUnit = require('../derived_unit');

const type = 'energy';

module.exports = () => {
  DerivedUnit.register(type, 'joule', 'J', [['mass', 'kg'], ['length', 'm'], ['length', 'm']], [['time', 's'], ['time', 's']]);
  DerivedUnit.registerCommonSIPrefixes(type, 'J');
  DerivedUnit.register(type, 'foot pound', 'ft-lb', [], [], 0.737562, 'J');
  DerivedUnit.register(type, 'electron volt', 'eV', [], [], 8.462e+18, 'ft-lb');
  DerivedUnit.registerUncommonSIPrefixes(type, 'J');
};