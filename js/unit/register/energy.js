const DerivedUnit = require('../derived_unit');

const type = 'energy';

module.exports = () => {
  DerivedUnit.register(type, 'joule', 'J', [['mass', 'Kg'], ['length', 'm'], ['length', 'm']], [['time', 's'], ['time', 's']]);
  DerivedUnit.register(type, 'Kilo joule', 'KJ', [], [], 1e3, 'J');
  DerivedUnit.register(type, 'Mega joule', 'MJ', [], [], 1e6, 'J');
  DerivedUnit.register(type, 'Giga joule', 'GJ', [], [], 1e9, 'J');
  DerivedUnit.register(type, 'milli joule', 'mJ', [], [], 1e-3, 'J');
  DerivedUnit.register(type, 'micro joule', 'μJ', [], [], 1e-6, 'J');
  DerivedUnit.register(type, 'nano joule', 'nJ', [], [], 1e-9, 'J');
  DerivedUnit.register(type, 'foot pounds', 'ft-lb', [], [], 0.737562, 'J');
  DerivedUnit.register(type, 'electron volt', 'eV', [], [], 8.462e+18, 'ft-lb');

};