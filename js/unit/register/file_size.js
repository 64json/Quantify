const BaseUnit = require('../base_unit');

const type = 'file size';

module.exports = () => {
  BaseUnit.register(type, 'byte', 'byte', 1);
  BaseUnit.register(type, 'kilobyte', 'kb', 1024, 'byte');
  BaseUnit.register(type, 'megabyte', 'Mb', 1024, 'kb');
  BaseUnit.register(type, 'gigabyte', 'Gb', 1024, 'Mb');
  BaseUnit.register(type, 'terabyte', 'Tb', 1024, 'Gb');
  BaseUnit.register(type, 'petabyte', 'Pb', 1024, 'Tb');
  BaseUnit.register(type, 'exabyte', 'Eb', 1024, 'Pb');
  BaseUnit.register(type, 'zettabyte', 'Zb', 1024, 'Eb');
  BaseUnit.register(type, 'yottabyte', 'Yb', 1024, 'Zb');
  BaseUnit.register(type, 'bit', 'bit', 1 / 8, 'byte');
  BaseUnit.register(type, 'kilobit', 'kbit', 1024, 'bit');
  BaseUnit.register(type, 'megabit', 'Mbit', 1024, 'kbit');
  BaseUnit.register(type, 'gigabit', 'Gbit', 1024, 'Mbit');
  BaseUnit.register(type, 'terabit', 'Tbit', 1024, 'Gbit');
  BaseUnit.register(type, 'petabit', 'Pbit', 1024, 'Tbit');
  BaseUnit.register(type, 'exabit', 'Ebit', 1024, 'Pbit');
  BaseUnit.register(type, 'zettabit', 'Zbit', 1024, 'Ebit');
  BaseUnit.register(type, 'yottabit', 'Ybit', 1024, 'Zbit');
};