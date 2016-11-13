const Util = require('../util');
const app = require('../app');

module.exports = latex => {
  const unitClasses = app.getUnitClasses();
  latex = latex.replace(/\\ /g, '');
  latex = infiniteReplace(latex, /\\frac{([^{}]+)}{([^{}]+)}/g, '($1)/($2)');
  latex = latex.replace(/\\left\(/g, '(');
  latex = latex.replace(/\\right\)/g, ')');
  latex = infiniteReplace(latex, /\(([^()]+)\)\^/g, '[($1)]^');
  latex = infiniteReplace(latex, /\^{([^{}]+)}/g, '^($1)');
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
        replaced = replaced.replace(/\[([-+]?[0-9]*\.?[0-9]+(?:[eE][-+]?[0-9]+)?)]\^([-+]?[0-9]*\.?[0-9]+(?:[eE][-+]?[0-9]+)?)/g, (match, value, power)=> {
          console.log(value);
          console.log(power);
          return Math.pow(value, power);
        });
        replaced = replaced.replace(/(\+?[0-9]*\.?[0-9]+(?:[eE][-+]?[0-9]+)?)\^([-+]?[0-9]*\.?[0-9]+(?:[eE][-+]?[0-9]+)?)/g, (match, value, power)=> {
          console.log(value);
          console.log(power);
          return Math.pow(value, power);
        });
        replaced = replaced.replace(/\$\$([^(\$\$)]+)\$\$\^([-+]?[0-9]*\.?[0-9]+(?:[eE][-+]?[0-9]+)?)/g, (match, unitless, power)=> {
          unitless = JSON.parse(unitless);
          unitless.quantity = Math.pow(unitless.quantity, power);
          for (const type in unitless.types) {
            unitless.types[type] *= power;
            if (unitless.types[type] == 0) {
              delete unitless.types[type];
            }
          }
          return '$$' + JSON.stringify(unitless) + '$$';
        });
      }

      replaced = null;
      while (replaced != content) {
        content = replaced || content;
        replaced = content;
        replaced = replaced.replace(/([-+]?[0-9]*\.?[0-9]+(?:[eE][-+]?[0-9]+)?)(\*|\/)([-+]?[0-9]*\.?[0-9]+(?:[eE][-+]?[0-9]+)?)/g, (match, value1, sign, value2)=> {
          value1 = Number(value1);
          value2 = Number(value2);
          const result = sign == '/' ? value1 / value2 : value1 * value2;
          return (result >= 0 ? '+' : '') + result;
        });
        replaced = replaced.replace(/([-+]?[0-9]*\.?[0-9]+(?:[eE][-+]?[0-9]+)?)(\*|\/|)\$\$([^(\$\$)]+)\$\$/g, (match, value, sign, unitless)=> {
          return MDUnitlesses({types: {}, quantity: Number(value)}, sign, JSON.parse(unitless));
        });
        replaced = replaced.replace(/\$\$([^(\$\$)]+)\$\$(\*|\/|)([-+]?[0-9]*\.?[0-9]+(?:[eE][-+]?[0-9]+)?)/g, (match, unitless, sign, value)=> {
          return MDUnitlesses(JSON.parse(unitless), sign, {types: {}, quantity: Number(value)});
        });
        replaced = replaced.replace(/\$\$([^(\$\$)]+)\$\$(\*|\/|)\$\$([^(\$\$)]+)\$\$/g, (match, unitless1, sign, unitless2)=> {
          return MDUnitlesses(JSON.parse(unitless1), sign, JSON.parse(unitless2));
        });
      }

      replaced = null;
      while (replaced != content) {
        content = replaced || content;
        replaced = content;
        replaced = replaced.replace(/([-+]?[0-9]*\.?[0-9]+(?:[eE][-+]?[0-9]+)?)(\+|-)([-+]?[0-9]*\.?[0-9]+(?:[eE][-+]?[0-9]+)?)/g, (match, value1, sign, value2)=> {
          value1 = Number(value1);
          value2 = Number(value2);
          const result = sign == '+' ? value1 + value2 : value1 - value2;
          return (result >= 0 ? '+' : '') + result;
        });
        replaced = replaced.replace(/([-+]?[0-9]*\.?[0-9]+(?:[eE][-+]?[0-9]+)?)(\+|-)\$\$([^(\$\$)]+)\$\$/g, (match, value, sign, unitless)=> {
          return PMUnitlesses({types: {}, quantity: Number(value)}, sign, JSON.parse(unitless));
        });
        replaced = replaced.replace(/\$\$([^(\$\$)]+)\$\$(\+|-)([-+]?[0-9]*\.?[0-9]+(?:[eE][-+]?[0-9]+)?)/g, (match, unitless, sign, value)=> {
          return PMUnitlesses(JSON.parse(unitless), sign, {types: {}, quantity: Number(value)});
        });
        replaced = replaced.replace(/\$\$([^(\$\$)]+)\$\$(\+|-)\$\$([^(\$\$)]+)\$\$/g, (match, unitless1, sign, unitless2)=> {
          return PMUnitlesses(JSON.parse(unitless1), sign, JSON.parse(unitless2));
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
  return '+$$' + JSON.stringify(unitless1) + '$$';
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