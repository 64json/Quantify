const BaseUnit = require('../base_unit');

const type = 'current';

module.exports = () => {
    BaseUnit.register(type, 'Ampere', 'A', 1);
    BaseUnit.register(type, 'centi Ampere', 'cA', 1e-2, 'A');
    BaseUnit.register(type, 'Kilo Ampere', 'KA', 1e3, 'A');
    BaseUnit.register(type, 'milli Ampere', 'mA', 1e-3, 'A');
    BaseUnit.register(type, 'micro Ampere', 'µA', 1e-6, 'A');
    BaseUnit.register(type, 'nano Ampere', 'nA', 1e-9, 'A');
    BaseUnit.register(type, 'pico Ampere', 'pA', 1e-12, 'A');
};