const BaseUnit = require('../base_unit');

const type = 'angle';

module.exports = () => {
  BaseUnit.register(type, '', 1);
  BaseUnit.register(type, 'rad', 1);
  BaseUnit.register(type,'°',57.2958,'');

};