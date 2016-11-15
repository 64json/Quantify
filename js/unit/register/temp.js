const BaseUnit = require('../base_unit');

const type = 'temp';

module.exports = () => {
  BaseUnit.register(type, 'Kelvin', 'K', 1);
  BaseUnit.register(type, 'Celsius', '°C', 1, 'K'); // TODO
  BaseUnit.register(type, 'Fahrenheit ', '°F', 9 / 5, '°C');
};