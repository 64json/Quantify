const DerivedUnit = require('../derived_unit');

const type = 'lux';

module.exports = () => {
  DerivedUnit.register(type, 'lx', [['intensity', 'cd']], [['length', 'm'], ['length', 'm']]);
  DerivedUnit.register(type, 'Klx', [], [], 1e3, 'lx');
  DerivedUnit.register(type, 'Mlx', [], [], 1e6, 'lx');
  DerivedUnit.register(type, 'Glx', [], [], 1e9, 'lx');
  DerivedUnit.register(type, 'mlx', [], [], 1e-3, 'lx');
  DerivedUnit.register(type, 'μlx', [], [], 1e-6, 'lx');
  DerivedUnit.register(type, 'nlx', [], [], 1e-9, 'lx');
};