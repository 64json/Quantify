const BaseUnit = require('../base_unit')
// decigram
module.exports = class extends BaseUnit {
  constructor(val) {
    super('dg', .1, val)
  }
};