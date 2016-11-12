const BaseUnit = require('../base_unit')

module.exports = class extends BaseUnit {
  constructor(val) {
    super('m', 1, val)
  }
};