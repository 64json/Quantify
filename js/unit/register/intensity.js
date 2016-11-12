const BaseUnit = require('../base_unit');

const type = 'intensity';

module.exports = () => {
  BaseUnit.register(type, 'cd', 1);
};