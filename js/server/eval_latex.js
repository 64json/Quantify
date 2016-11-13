const app = require('../app/index');

module.exports = latex => {
  const unitClasses = app.getUnitClasses();
  latex = latex.replace(/\\ /g, '');
  latex = latex.replace(/\\left\(/g, '(');
  latex = latex.replace(/\\right\)/g, ')');
  var replaced = null;
  while (replaced != latex) {
    latex = replaced || latex;
    replaced = latex;
    replaced = infiniteReplace(replaced, /\^{([^{}]+)}/g, '^($1)');
    replaced = infiniteReplace(replaced, /\\frac{([^{}]+)}{([^{}]+)}/g, '($1)/($2)');
  }
  latex = latex.replace(/\\cdot/g, '*');
  latex = latex.replace(/(\\| )/g, '');
  latex = latex.replace(/(-|(?!a-zA-ZΩ°µ)((?:[a-zA-Z]|Ω|°|µ)+)(?!a-zA-ZΩ°µ)|([0-9]*\.?[0-9]+(?:[eE][-+]?[0-9]+)?))/g, (match, value) => {
    if (value == '-') {
      return '+$$' + JSON.stringify({types: {}, quantity: -1}) + '$$*'
    } else if (isNaN(value)) {
      if (value.toLowerCase() == 'e') return value;
      return '$$' + JSON.stringify(unitClasses[value].UNITLESS) + '$$';
    } else {
      return '$$' + JSON.stringify({types: {}, quantity: Number(value)}) + '$$';
    }
  });
  latex = infiniteReplace(latex, /(?:\(|^)([^()]+)(?:\)|$)/g,
    (match, content) => {
      content = infiniteReplace(content, /\$\$([^($$)]+)\$\$\^\$\$([^($$)]+)\$\$/g, (match, unitless1, unitless2) => {
        return powerUnitlesses(JSON.parse(unitless1), JSON.parse(unitless2));
      });

      content = infiniteReplace(content, /\$\$([^($$)]+)\$\$(\*|\/|)\$\$([^($$)]+)\$\$/, (match, unitless1, sign, unitless2)=> {
        return multiplyDivideUnitlesses(JSON.parse(unitless1), sign, JSON.parse(unitless2));
      });

      content = infiniteReplace(content, /\+?\$\$([^($$)]+)\$\$\+\$\$([^($$)]+)\$\$/g, (match, unitless1, unitless2)=> {
        return plusUnitlesses(JSON.parse(unitless1), JSON.parse(unitless2));
      });

      if (content[0] == '+') content = content.substring(1);
      return content;
    });

  return JSON.parse(latex.split('$$')[1]);
};

const powerUnitlesses = (unitless1, unitless2) => {
  if (Object.keys(unitless2.types).length) return null;
  const power = unitless2.quantity;
  unitless1.quantity = Math.pow(unitless1.quantity, power);
  for (const type in unitless1.types) {
    unitless1.types[type] *= power;
    if (unitless1.types[type] == 0) {
      delete unitless1.types[type];
    }
  }
  return '$$' + JSON.stringify(unitless1) + '$$';
};

const multiplyDivideUnitlesses = (unitless1, sign, unitless2) => {
  if (sign == '/') {
    unitless1.quantity /= unitless2.quantity;
  } else {
    unitless1.quantity *= unitless2.quantity;
  }
  for (const type in unitless2.types) {
    if (!unitless1.types.hasOwnProperty(type)) {
      unitless1.types[type] = (sign == '/' ? -1 : 1) * unitless2.types[type];
    } else {
      unitless1.types[type] += (sign == '/' ? -1 : 1) * unitless2.types[type];
    }
    if (unitless1.types[type] == 0) {
      delete unitless1.types[type];
    }
  }
  return '$$' + JSON.stringify(unitless1) + '$$';
};

const plusUnitlesses = (unitless1, unitless2) => {
  if (Object.keys(unitless1.types).length != Object.keys(unitless2.types).length) return null;
  for (const type in unitless2.types) {
    if (unitless2.types[type] != unitless1.types[type]) return null;
  }
  unitless1.quantity += unitless2.quantity;
  return '+$$' + JSON.stringify(unitless1) + '$$';
};

const infiniteReplace = (str, src, dst) => {
  var replaced = null;
  while (replaced != str) {
    str = replaced || str;
    replaced = str.replace(src, dst);
  }
  return str;
};