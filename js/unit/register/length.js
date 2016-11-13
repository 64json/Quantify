const BaseUnit = require('../base_unit');

const type = 'length';

module.exports = () => {
  BaseUnit.register(type, 'meter', 'm', 1);
  BaseUnit.register(type, 'centi meter', 'cm', 1e-2, 'm');
  BaseUnit.register(type, 'Kilo meter', 'km', 1e3, 'm');
  BaseUnit.register(type, 'milli meter', 'mm', 1e-3, 'm');
  BaseUnit.register(type, 'micro meter', 'µm', 1e-6, 'm');
  BaseUnit.register(type, 'nano meter', 'nm', 1e-9, 'm');
  BaseUnit.register(type, 'pico meter', 'pm', 1e-12, 'm');
  BaseUnit.register(type, 'feet', 'ft', 0.3048, 'm');
  BaseUnit.register(type, 'yard', 'yd', 3.000, 'ft');
  BaseUnit.register(type, 'mile', 'mi', 1760, 'yd');
  BaseUnit.register(type, 'inch', 'in', 1.5783e-5, 'mi');
};