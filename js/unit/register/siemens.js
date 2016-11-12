const DerivedUnit = require('../derived_unit');

const type = 'siemens';

module.exports = () => {
    DerivedUnit.register(type, 'siemens', 'S', [['time', 's'], ['time', 's'], ['time', 's'], ['current', 'A'], ['current', 'A']], [['mass', 'kg'], ['length', 'm'], ['length', 'm']]);
    DerivedUnit.register(type, 'Kilo siemens', 'KS', [], [], 1e3, 'S');
    DerivedUnit.register(type, 'Mega siemens', 'MS', [], [], 1e6, 'S');
    DerivedUnit.register(type, 'Giga siemens', 'GS', [], [], 1e9, 'S');
    DerivedUnit.register(type, 'milli siemens', 'mS', [], [], 1e-3, 'S');
    DerivedUnit.register(type, 'micro siemens', 'μS', [], [], 1e-6, 'S');
    DerivedUnit.register(type, 'nano siemens', 'nS', [], [], 1e-9, 'S');
};

