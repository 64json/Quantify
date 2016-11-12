const BaseUnit = require('../base_unit')
// milligram
module.exports = class extends BaseUnit {
  constructor(val) {
    super('mg', 0.001, val)
  }
};