const BaseUnit = require('../base_unit')

module.exports = class extends BaseUnit {
  constructor(val) {
    super('mm', .001, val)
  }
};