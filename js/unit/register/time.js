const BaseUnit = require('../base_unit');

const type = 'time';

module.exports = () => {
  BaseUnit.register(type, 's', 1);
  BaseUnit.register(type, 'ds', 1e-1, 's');
  BaseUnit.register(type, 'cs', 1e-2, 's');
  BaseUnit.register(type, 'ks', 1e3, 's');
  BaseUnit.register(type, 'ms', 1e-3, 's');
  BaseUnit.register(type, 'µs', 1e-6, 's');
  BaseUnit.register(type, 'ns', 1e-9, 's');
  BaseUnit.register(type, 'ps', 1e-12, 's');
  BaseUnit.register(type, 'min',60, 's');
  BaseUnit.register(type, 'hr',60, 'min');
  BaseUnit.register(type,'d',24, 'hr');
  BaseUnit.register(type, 'w',7, 'd');
  BaseUnit.register(type, 'mon',4,'w');


};