const BaseUnit = require('../base_unit');

const type = 'matter';

module.exports = () => {
    BaseUnit.register(type, 'moles', 'mol', 1);
    BaseUnit.register(type, 'atoms', 6.02e23, 'mol');
};