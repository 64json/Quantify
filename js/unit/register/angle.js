const BaseUnit = require('../base_unit');

const type = 'angle';

module.exports = () => {
  BaseUnit.register(type, 'radian', '', 1);
  BaseUnit.register(type, 'radian', 'rad', 1);
  BaseUnit.register(type, 'degree', '°', 57.2958, '');
};