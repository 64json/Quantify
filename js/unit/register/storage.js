const BaseUnit = require('../base_unit');

const type = 'storage';

module.exports = () => {
  BaseUnit.register(type, 'bit', 1);
  BaseUnit.register(type, 'byte',0.125, 'bit');
  BaseUnit.register(type, 'kbyte', 1e3, 'byte');
  BaseUnit.register(type, 'Mbyte', 1e6, 'byte');
  BaseUnit.register(type, 'Gbyte', 1e9, 'byte');
  BaseUnit.register(type, 'Tbyte', 1e12, 'byte');
  BaseUnit.register(type, 'Pm', 1e15, 'byte');
  BaseUnit.register(type, 'Ebyte', 1e18, 'byte');
  BaseUnit.register(type, 'Zbyte', 1e21, 'byte');
  BaseUnit.register(type, 'Ybyte', 1e24, 'byte');
};