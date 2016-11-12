const BaseUnit = require('../base_unit');

const type = 'mass';

module.exports = () => {
  BaseUnit.register(type, 'g', 1);
  BaseUnit.register(type, 'dg', 1e-1, 'g');
  BaseUnit.register(type, 'cg', 1e-2, 'g');
  BaseUnit.register(type, 'kg', 1e3, 'g');
  BaseUnit.register(type, 'mg', 1e-3, 'g');
  BaseUnit.register(type, 'ng', 1e-9, 'g');
  BaseUnit.register(type, 'pg', 1e-12, 'g');
  BaseUnit.register(type, 'lb',453.59237,'g');
  BaseUnit.register(type,'oz',0.0625,'lb');
};