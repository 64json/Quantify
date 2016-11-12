const DerivedUnit = require('../derived_unit');

const type = 'joule';

module.exports = () => {
    DerivedUnit.register(type, 'joule', 'J', [['mass', 'kg'], ['length', 'm'], ['length', 'm']], [['time', 's'], ['time', 's']]);
    DerivedUnit.register(type, 'Kilo joule', 'KJ', [], [], 1e3, 'J');
    DerivedUnit.register(type, 'Mega joule', 'MJ', [], [], 1e6, 'J');
    DerivedUnit.register(type, 'Giga joule', 'GJ', [], [], 1e9, 'J');
    DerivedUnit.register(type, 'milli joule', 'mJ', [], [], 1e-3, 'J');
    DerivedUnit.register(type, 'micro joule', 'μJ', [], [], 1e-6, 'J');
    DerivedUnit.register(type, 'nano joule', 'nJ', [], [], 1e-9, 'J');
};