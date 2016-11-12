const BaseUnit = require('../base_unit')
// centigram
module.exports = class extends BaseUnit {
  constructor(val) {
    super('cg', .01, val)
  }
};