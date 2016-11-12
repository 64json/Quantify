const BaseUnit = require('../base_unit')
// kilogram
module.exports = class extends BaseUnit {
  constructor(val) {
    super('kg', 1000, val)
  }
};