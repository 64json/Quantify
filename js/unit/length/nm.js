const BaseUnit = require('../base_unit')

module.exports = class extends BaseUnit {
  constructor(val) {
    super('nm',0.000000001, val)
  }
};