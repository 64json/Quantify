const BaseUnit = require('../base_unit');

const type = 'length';

module.exports = () => {
  BaseUnit.register(type, 'm', 1);
  BaseUnit.register(type, 'cm', 1e-2, 'm');
  BaseUnit.register(type, 'km', 1e3, 'm');
  BaseUnit.register(type, 'mm', 1e-3, 'm');
  BaseUnit.register(type, 'µm', 1e-6, 'm');
  BaseUnit.register(type, 'nm', 1e-9, 'm');
  BaseUnit.register(type, 'pm', 1e-12, 'm');
};