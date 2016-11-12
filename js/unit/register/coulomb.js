const DerivedUnit = require('../derived_unit');

const type = 'coulomb';

module.exports = () => {
    DerivedUnit.register(type, 'coulomb', 'C', [['current', 'A'], ['time', 's']], []);
    DerivedUnit.register(type, 'kilo coulomb', 'KC', [], [], 1e3, 'C');
    DerivedUnit.register(type, 'Mega coulomb', 'MC', [], [], 1e6, 'C');
    DerivedUnit.register(type, 'Giga coulomb', 'GC', [], [], 1e9, 'C');
    DerivedUnit.register(type, 'milli coulomb', 'mC', [], [], 1e-3, 'C');
    DerivedUnit.register(type, 'micro coulomb', 'μC', [], [], 1e-6, 'C');
    DerivedUnit.register(type, 'nano coulomb', 'nC', [], [], 1e-9, 'C');
};