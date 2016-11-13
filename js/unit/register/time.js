const BaseUnit = require('../base_unit');

const type = 'time';

module.exports = () => {
  BaseUnit.register(type, 'seconds', 's', 1);
  BaseUnit.register(type, 'deci seconds', 'ds', 1e-1, 's');
  BaseUnit.register(type, 'centi seconds', 'cs', 1e-2, 's');
  BaseUnit.register(type, 'Kilo seconds', 'ks', 1e3, 's');
  BaseUnit.register(type, 'milli seconds', 'ms', 1e-3, 's');
  BaseUnit.register(type, 'micro seconds', 'µs', 1e-6, 's');
  BaseUnit.register(type, 'nano seconds', 'ns', 1e-9, 's');
  BaseUnit.register(type, 'pico seconds', 'ps', 1e-12, 's');
  BaseUnit.register(type, 'minutes', 'min', 60, 's');
  BaseUnit.register(type, 'hours', 'hr', 60, 'min');
  BaseUnit.register(type, 'days', 'd', 24, 'hr');
  BaseUnit.register(type, 'weeks', 'w', 7, 'd');
  BaseUnit.register(type, 'month', 'mon', 4, 'w');
};