const DerivedUnit = require('../derived_unit');

const type = 'lux';

module.exports = () => {
    DerivedUnit.register(type, 'lux', 'lx', [['intensity', 'cd']], [['length', 'm'], ['length', 'm']]);
    DerivedUnit.register(type, 'Kilo lux', 'Klx', [], [], 1e3, 'lx');
    DerivedUnit.register(type, 'Mega lux', 'Mlx', [], [], 1e6, 'lx');
    DerivedUnit.register(type, 'Giga lux', 'Glx', [], [], 1e9, 'lx');
    DerivedUnit.register(type, 'milli lux', 'mlx', [], [], 1e-3, 'lx');
    DerivedUnit.register(type, 'micro lux', 'μlx', [], [], 1e-6, 'lx');
    DerivedUnit.register(type, 'nano lux', 'nlx', [], [], 1e-9, 'lx');
};