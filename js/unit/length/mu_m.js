const BaseUnit = require('../base_unit')

module.exports = class extends BaseUnit {
  constructor(val) {
    super('mu_m',0.000001, val)
  }
};