const length = require('./length');
const mass = require('./mass');
const time = require('./time');
const angle = require('./angle');
const current = require('./current');
const temp = require('./temp');
const matter = require('./matter');
const intensity = require('./intensity');


module.exports = () => {
  length();
  mass();
  time();
  angle();
  current();
  temp();
  matter();
  intensity();
};
