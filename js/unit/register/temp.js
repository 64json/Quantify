const BaseUnit = require('../base_unit');

const type = 'temp';

module.exports = () => {
  BaseUnit.register(type, 'K', 1);
  BaseUnit.register(type, '°C', 1, '°K'); // TODO
  BaseUnit.register(type,'°F',9/5,'°C');

};