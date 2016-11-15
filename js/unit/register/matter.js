const BaseUnit = require('../base_unit');

const type = 'matter';

module.exports = () => {
  BaseUnit.register(type, 'atom', 'atom', 1);
  BaseUnit.register(type, 'mole', 'mol', 6.022140857e23, 'atom');
};