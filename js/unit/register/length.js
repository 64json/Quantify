const BaseUnit = require('../base_unit');

const type = 'length';

module.exports = () => {
  BaseUnit.register(type, 'meter', 'm', 1);
  BaseUnit.registerCommonSIPrefixes(type, 'm');
  BaseUnit.register(type, 'feet', 'ft', 0.3048, 'm');
  BaseUnit.register(type, 'yard', 'yd', 3.000, 'ft');
  BaseUnit.register(type, 'mile', 'mi', 1760, 'yd');
  BaseUnit.register(type, 'inch', 'in', 1.5783e-5, 'mi');
  BaseUnit.registerUncommonSIPrefixes(type, 'm');
};