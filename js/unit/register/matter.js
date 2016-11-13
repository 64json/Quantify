const BaseUnit = require('../base_unit');

const type = 'matter';

module.exports = () => {
  BaseUnit.register(type, 'atoms', 'atom', 1);
  BaseUnit.register(type, 'moles', 'mol', 6.022140857e23, 'atom');
};