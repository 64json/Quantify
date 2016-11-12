const BaseUnit = require('../base_unit')
// picogram
module.exports = class extends BaseUnit {
  constructor(val) {
    super('pg', 0.000000000001, val);
  }
};