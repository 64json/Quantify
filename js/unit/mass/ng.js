const BaseUnit = require('../base_unit')
// nanogram
module.exports = class extends BaseUnit {
  constructor(val) {
    super('ng',0.000000001, val)
  }
};