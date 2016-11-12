const units = require('../unit').units;

const iterateUnits = (obj) => {
  for (var key in obj) {
    switch (typeof obj[key]) {
      case "object":
        iterateUnits(obj[key]);
        break;
      case "function":
        console.log('function');
        break;
    }
  }
};

module.exports = (muls, divs, val) => {
  console.log(units);
  iterateUnits(units);
};