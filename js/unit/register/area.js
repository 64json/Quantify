const DerivedUnit = require('../derived_unit');

const type = 'area';

module.exports = () => {
  DerivedUnit.register(type, 'square meter', 'm^2', [['length', 'm'], ['length', 'm']], []);
  DerivedUnit.register(type, 'square Kilo meter', 'Km^2', [], [], 1e3, 'm^2');
  DerivedUnit.register(type, 'square Mega meter', 'Mm^2', [], [], 1e6, 'm^2');
  DerivedUnit.register(type, 'square Giga meter', 'Gm^2', [], [], 1e9, 'm^2');
  DerivedUnit.register(type, 'square milli meter', 'mm^2', [], [], 1e-3, 'm^2');
  DerivedUnit.register(type, 'square micro meter', 'μm^2', [], [], 1e-6, 'm^2');
  DerivedUnit.register(type, 'square nano meter', 'nm^2', [], [], 1e-9, 'm^2');
  DerivedUnit.register(type, 'acre', 'acre', [], [], 4046.86, 'm^2');
  DerivedUnit.register(type, 'hectare', 'ha', [], [], 0.404686, 'acre');
};