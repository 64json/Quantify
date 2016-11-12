const BaseUnit = require('../base_unit')
// gram
module.exports = class extends BaseUnit {
  constructor(val) {
    super('g', 1, val)
  }
};