const DerivedUnit = require('../derived_unit');

const type = 'coulomb';

module.exports = () => {
  DerivedUnit.register(type, 'C', [['current', 'A'], ['time', 's']], []);
  DerivedUnit.register(type, 'KC', [], [], 1e3, 'C');
  DerivedUnit.register(type, 'MC', [], [], 1e6, 'C');
  DerivedUnit.register(type, 'GC', [], [], 1e9, 'C');
  DerivedUnit.register(type, 'mC', [], [], 1e-3, 'C');
  DerivedUnit.register(type, 'μC', [], [], 1e-6, 'C');
  DerivedUnit.register(type, 'nC', [], [], 1e-9, 'C');
};