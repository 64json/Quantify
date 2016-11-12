const length = require('./length');
const mass = require('./mass');
const time = require('./time');
const speed = require('./speed');

module.exports = () => {
  length();
  mass();
  time();
  speed();
};