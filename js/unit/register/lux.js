const DerivedUnit = require('../derived_unit');

const type = 'lux';

module.exports = () => {
  DerivedUnit.register(type, 'lux', 'lx', 1, [['intensity', 'cd']], [['length', 'm'], ['length', 'm']]);
  DerivedUnit.registerCommonSIPrefixes(type, 'lx');
  DerivedUnit.registerUncommonSIPrefixes(type, 'lx');
};