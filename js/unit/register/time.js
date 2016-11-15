const BaseUnit = require('../base_unit');

const type = 'time';

module.exports = () => {
  BaseUnit.register(type, 'second', 's', 1);
  BaseUnit.register(type, 'minute', 'min', 60, 's');
  BaseUnit.register(type, 'hour', 'hr', 60, 'min');
  BaseUnit.register(type, 'day', 'd', 24, 'hr');
  BaseUnit.register(type, 'week', 'w', 7, 'd');
  BaseUnit.register(type, 'month', 'mon', 4, 'w');
  BaseUnit.register(type, 'year', 'yr', 12, 'mon');
  BaseUnit.register(type, 'century', 'century', 100, 'yr');
  BaseUnit.registerCommonSIPrefixes(type, 's');
  BaseUnit.registerUncommonSIPrefixes(type, 's');
};