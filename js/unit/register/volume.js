const DerivedUnit = require('../derived_unit');

const type = 'volume';

module.exports = () => {
  DerivedUnit.register(type, 'liters', 'L', [['length', 'cm'], ['length', 'cm'], ['length', 'cm']], [], 0.01);
  DerivedUnit.registerCommonSIPrefixes(type, 'L');
  DerivedUnit.register(type, 'teaspoon', 'tsp', [], [], 4.92892159375, 'mL');
  DerivedUnit.register(type, 'tablespoon', 'Tbsp', [], [], 3, 'tsp');
  DerivedUnit.register(type, 'US fluid ounce', 'fl oz', [], [], 2, 'Tbsp');
  DerivedUnit.register(type, 'US cup', 'cp', [], [], 8, 'fl oz');
  DerivedUnit.register(type, 'US pint', 'pt', [], [], 2, 'cp');
  DerivedUnit.register(type, 'US quart', 'qt', [], [], 2, 'pt');
  DerivedUnit.register(type, 'US gallon', 'gal', [], [], 4, 'qt');
  DerivedUnit.register(type, 'barrel', 'bbl', [], [], 31.5, 'gal');
  DerivedUnit.registerUncommonSIPrefixes(type, 'L');
};