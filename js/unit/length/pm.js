const BaseUnit = require('../base_unit')

module.exports = class extends BaseUnit {
  constructor(val) {
    super('pm', 0.000000000001, val)
  }
};