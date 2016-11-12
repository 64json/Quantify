const DerivedUnit = require('../derived_unit');

const type = 'ohm';

module.exports = () => {
    DerivedUnit.register(type, 'ohm', 'Ω', [['mass', 'kg'], ['length', 'm'], ['length', 'm']], [['time', 's'], ['time', 's'], ['time', 's'], ['current', 'A'], ['current', 'A']]);
    DerivedUnit.register(type, 'Kilo ohm', 'KΩ', [], [], 1e3, 'Ω');
    DerivedUnit.register(type, 'Mega ohm', 'MΩ', [], [], 1e6, 'Ω');
    DerivedUnit.register(type, 'Giga ohm', 'GΩ', [], [], 1e9, 'Ω');
    DerivedUnit.register(type, 'milli ohm', 'mΩ', [], [], 1e-3, 'Ω');
    DerivedUnit.register(type, 'micro ohm', 'μΩ', [], [], 1e-6, 'Ω');
    DerivedUnit.register(type, 'nano ohm', 'nΩ', [], [], 1e-9, 'Ω');
};