const DerivedUnit = require('../derived_unit');

const type = 'telsa';

module.exports = () => {
    DerivedUnit.register(type, 'telsa', 'T', [['mass', 'kg']], [['time', 's'], ['time', 's'], ['current', 'A']]);
    DerivedUnit.register(type, 'Kilo telsa', 'KT', [], [], 1e3, 'T');
    DerivedUnit.register(type, 'Mega telsa', 'MT', [], [], 1e6, 'T');
    DerivedUnit.register(type, 'Giga telsa', 'GT', [], [], 1e9, 'T');
    DerivedUnit.register(type, 'milli telsa', 'mT', [], [], 1e-3, 'T');
    DerivedUnit.register(type, 'micro telsa', 'μT', [], [], 1e-6, 'T');
    DerivedUnit.register(type, 'nano telsa', 'nT', [], [], 1e-9, 'T');
};