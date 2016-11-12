const BaseUnit = require('../base_unit');

const type = 'mass';

module.exports = () => {
  BaseUnit.register(type, 'g', 1);
  BaseUnit.register(type, 'dg', 1e-1, 'g');
  BaseUnit.register(type, 'cg', 1e-2, 'g');
};