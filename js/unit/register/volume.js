const DerivedUnit = require('../derived_unit');

const type = 'volume';

module.exports = () => {
  DerivedUnit.register(type, 'liters', 'L', [['length', 'm'], ['length', 'm'], ['length', 'm']], []);
  DerivedUnit.register(type, 'Kilo liters', 'KL', [], [], 1e3, 'L');
  DerivedUnit.register(type, 'Mega liters', 'ML', [], [], 1e6, 'L');
  DerivedUnit.register(type, 'Giga liters', 'GL', [], [], 1e9, 'L');
  DerivedUnit.register(type, 'milli liters', 'mL', [], [], 1e-3, 'L');
  DerivedUnit.register(type, 'micro liters', 'μL', [], [], 1e-6, 'L');
  DerivedUnit.register(type, 'nano liters', 'nL', [], [], 1e-9, 'L');
  DerivedUnit.register(type, 'US gallon', 'US gallon', [], [], 0.264172, 'L');
};