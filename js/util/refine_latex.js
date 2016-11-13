const Util = require('../util');
const app = require('../app');

module.exports = latex => {
  const unitClasses = app.getUnitClasses();
  latex = latex.replace(/\\ /g, '');
  latex = infiniteReplace(latex, /\\frac{([^{}]+)}{([^{}]+)}/g, '($1)/($2)');
  latex = latex.replace(/\\left\(/g, '(');
  latex = latex.replace(/\\right\)/g, ')');
  latex = latex.replace(/\\cdot/g, '*');
  latex = latex.replace(/(\\| )/g, '');
  latex = latex.replace(/(?!a-zA-ZΩ°µ)((?:[a-zA-Z]|Ω|°|µ)+)(?!a-zA-ZΩ°µ)/g, (match, symbol) => {
    return '$$' + JSON.stringify(unitClasses[symbol].UNITLESS) + '$$';
  });
  latex = infiniteReplace(latex, /(?:\(|^)([^()]+)(?:\)|$)/g,
    (match, content) => {
      var replaced;

      replaced = null;
      while (replaced != content) {
        content = replaced || content;
        replaced = content;
        replaced = replaced.replace(/(\d+(?:\.\d+)?)(\*|\/)(\d+(?:\.\d+)?)/g, (match, value1, sign, value2)=> {
          value1 = Number(value1);
          value2 = Number(value2);
          return sign == '/' ? value1 / value2 : value1 * value2;
        });
        replaced = replaced.replace(/(\d+(?:\.\d+)?)(\*|\/|)\$\$([^(\$\$)]+)\$\$/g, (match, value, sign, unitless)=> {
          const result = MDUnitlesses({types: {}, quantity: Number(value)}, sign, JSON.parse(unitless));
          return '$$' + JSON.stringify(result) + '$$';
        });
        replaced = replaced.replace(/\$\$([^(\$\$)]+)\$\$(\*|\/|)(\d+(?:\.\d+)?)/g, (match, unitless, sign, value)=> {
          const result = MDUnitlesses(JSON.parse(unitless), sign, {types: {}, quantity: Number(value)});
          return '$$' + JSON.stringify(result) + '$$';
        });
        replaced = replaced.replace(/\$\$([^(\$\$)]+)\$\$(\*|\/|)\$\$([^(\$\$)]+)\$\$/g, (match, unitless1, sign, unitless2)=> {
          const result = MDUnitlesses(JSON.parse(unitless1), sign, JSON.parse(unitless2));
          return '$$' + JSON.stringify(result) + '$$';
        });
      }

      replaced = null;
      while (replaced != content) {
        content = replaced || content;
        replaced = content;
        replaced = replaced.replace(/(\d+(?:\.\d+)?)(\+|-)(\d+(?:\.\d+)?)/g, (match, value1, sign, value2)=> {
          value1 = Number(value1);
          value2 = Number(value2);
          return sign == '+' ? value1 + value2 : value1 - value2;
        });
        replaced = replaced.replace(/(\d+(?:\.\d+)?)(\+|-)\$\$([^(\$\$)]+)\$\$/g, (match, value, sign, unitless)=> {
          const result = PMUnitlesses({types: {}, quantity: Number(value)}, sign, JSON.parse(unitless));
          return '$$' + JSON.stringify(result) + '$$';
        });
        replaced = replaced.replace(/\$\$([^(\$\$)]+)\$\$(\+|-)(\d+(?:\.\d+)?)/g, (match, unitless, sign, value)=> {
          const result = PMUnitlesses(JSON.parse(unitless), sign, {types: {}, quantity: Number(value)});
          return '$$' + JSON.stringify(result) + '$$';
        });
        replaced = replaced.replace(/\$\$([^(\$\$)]+)\$\$(\+|-)\$\$([^(\$\$)]+)\$\$/g, (match, unitless1, sign, unitless2)=> {
          const result = PMUnitlesses(JSON.parse(unitless1), sign, JSON.parse(unitless2));
          return '$$' + JSON.stringify(result) + '$$';
        });
      }
      return content;
    });
//  latex = infiniteReplace(latex, /\(([^()+-]+)\)/g, '$1');

  console.log(latex);
  return latex;
};

const MDUnitlesses = (unitless1, sign, unitless2) => {
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
  return unitless1;
};

const PMUnitlesses = (unitless1, sign, unitless2) => {
  if (Object.keys(unitless1.types).length != Object.keys(unitless2).length) return null;
  for (const type in unitless2.types) {
    if (unitless2.types[type] != unitless1.types[type]) return null;
  }
  if (sign == '+') {
    unitless1.quantity += unitless2.quantity;
  } else {
    unitless1.quantity -= unitless2.quantity;
  }
  return unitless1;
};

const infiniteReplace = (str, src, dst) => {
  var replaced = null;
  while (replaced != str) {
    str = replaced || str;
    replaced = str.replace(src, dst);
  }
  return str;
};