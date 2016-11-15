const BaseUnit = require('../base_unit');

const type = 'current';

module.exports = () => {
  BaseUnit.register(type, 'Ampere', 'A', 1);
  BaseUnit.registerCommonSIPrefixes(type, 'A');
  BaseUnit.registerUncommonSIPrefixes(type, 'A');
};