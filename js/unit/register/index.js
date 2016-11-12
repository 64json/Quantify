const length = require('./length');
const mass = require('./mass');
const time = require('./time');
const angle = require('./angle');
const joule = require('./joule');

module.exports = () => {
  length();
  mass();
  time();
  angle();
  joule();
};