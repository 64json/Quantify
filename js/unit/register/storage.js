const BaseUnit = require('../base_unit');

const type = 'storage';

module.exports = () => {
  BaseUnit.register(type, 'bit', 'bit', 1);
  BaseUnit.register(type, 'byte', 'byte', 0.125, 'bit');
  BaseUnit.register(type, 'Kilo byte', 'Kbyte', 1e3, 'byte');
  BaseUnit.register(type, 'Mega byte', 'Mbyte', 1e6, 'byte');
  BaseUnit.register(type, 'Giga byte', 'Gbyte', 1e9, 'byte');
  BaseUnit.register(type, 'Tera byte', 'Tbyte', 1e12, 'byte');
  BaseUnit.register(type, 'Peta byte', 'Pm', 1e15, 'byte');
  BaseUnit.register(type, 'Exa byte', 'Ebyte', 1e18, 'byte');
  BaseUnit.register(type, 'Zetta byte', 'Zbyte', 1e21, 'byte');
  BaseUnit.register(type, 'Yotta byte', 'Ybyte', 1e24, 'byte');
};