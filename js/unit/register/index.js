const length = require('./length');
const mass = require('./mass');
const time = require('./time');
const angle = require('./angle');
const current = require('./current');
const temp = require('./temp');
const matter = require('./matter');
const intensity = require('./intensity');
const storage  = require('./storage');
const joule = require('./joule');
const pascal = require('./pascal');
const Newton = require('./Newton');
const hertz = require('./hertz');
const watt = require('./watt');
const coulomb = require('./coulomb');
const volt = require('./volt');
const farad = require('./farad');
const ohm = require('./ohm');
const siemens = require('./siemens');
const weber = require('./weber');
const tesla = require('./tesla');
const henry = require('./henry');
const lux = require('./lux');




module.exports = () => {
  length();
  mass();
  time();
  angle();
  current();
  temp();
  matter();
  intensity();
  storage();
  joule();
  pascal();
  Newton();
  hertz();
  watt();
  coulomb();
  volt();
  farad();
  ohm();
  siemens();
  weber();
  tesla();
  henry();
  lux();
};
