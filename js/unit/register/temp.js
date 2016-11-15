const BaseUnit = require('../base_unit');

const type = 'temp';

module.exports = () => {
  BaseUnit.register(type, 'kelvin', 'K', 1);
  BaseUnit.register(type, 'celsius', '°C', 1, 'K'); // TODO
  BaseUnit.register(type, 'fahrenheit', '°F', 9 / 5, '°C');
};