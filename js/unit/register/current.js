const BaseUnit = require('../base_unit');

const type = 'current';

module.exports = () => {
  BaseUnit.register(type, 'A', 1);
  BaseUnit.register(type, 'cA', 1e-2, 'A');
  BaseUnit.register(type, 'kA', 1e3, 'A');
  BaseUnit.register(type, 'mA', 1e-3, 'A');
  BaseUnit.register(type, 'µA', 1e-6, 'A');
  BaseUnit.register(type, 'nA', 1e-9, 'A');
  BaseUnit.register(type, 'pA', 1e-12, 'A');
};