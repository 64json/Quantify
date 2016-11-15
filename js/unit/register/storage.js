const BaseUnit = require('../base_unit');

const type = 'storage';

module.exports = () => {
  BaseUnit.register(type, 'byte', 'byte', 1);
  BaseUnit.register(type, 'Kilo byte', 'kb', 1024, 'byte');
  BaseUnit.register(type, 'Mega byte', 'Mb', 1024, 'kb');
  BaseUnit.register(type, 'Giga byte', 'Gb', 1024, 'Mb');
  BaseUnit.register(type, 'Tera byte', 'Tb', 1024, 'Gb');
  BaseUnit.register(type, 'Peta byte', 'Pb', 1024, 'Tb');
  BaseUnit.register(type, 'Exa byte', 'Eb', 1024, 'Pb');
  BaseUnit.register(type, 'Zetta byte', 'Zb', 1024, 'Eb');
  BaseUnit.register(type, 'Yotta byte', 'Yb', 1024, 'Zb');
  BaseUnit.register(type, 'bit', 'bit', 1 / 8, 'byte');
  BaseUnit.register(type, 'Kilo bit', 'kbit', 1024, 'bit');
  BaseUnit.register(type, 'Mega bit', 'Mbit', 1024, 'kbit');
  BaseUnit.register(type, 'Giga bit', 'Gbit', 1024, 'Mbit');
  BaseUnit.register(type, 'Tera bit', 'Tbit', 1024, 'Gbit');
  BaseUnit.register(type, 'Peta bit', 'Pbit', 1024, 'Tbit');
  BaseUnit.register(type, 'Exa bit', 'Ebit', 1024, 'Pbit');
  BaseUnit.register(type, 'Zetta bit', 'Zbit', 1024, 'Ebit');
  BaseUnit.register(type, 'Yotta bit', 'Ybit', 1024, 'Zbit');
};