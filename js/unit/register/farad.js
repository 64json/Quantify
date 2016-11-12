const DerivedUnit = require('../derived_unit');

const type = 'farad';

module.exports = () => {
    DerivedUnit.register(type, 'farad', 'F', [['time', 's'], ['time', 's'], ['time', 's'], ['time', 's'], ['current', 'A'], ['current', 'A']], [['mass', 'kg'], ['length', 'm'], ['length', 'm']]);
    DerivedUnit.register(type, 'Kilo farad', 'KF', [], [], 1e3, 'F');
    DerivedUnit.register(type, 'Mega farad', 'MF', [], [], 1e6, 'F');
    DerivedUnit.register(type, 'Giga farad', 'GF', [], [], 1e9, 'F');
    DerivedUnit.register(type, 'milli farad', 'mF', [], [], 1e-3, 'F');
    DerivedUnit.register(type, 'micro farad', 'μF', [], [], 1e-6, 'F');
    DerivedUnit.register(type, 'nano farad', 'nF', [], [], 1e-9, 'F');
};