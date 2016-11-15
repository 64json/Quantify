const app = require('../app/index');

module.exports = latex => {
  const corrected = [];
  const units = app.getUnits();
  latex = latex.replace(/\\ /g, '');
  latex = latex.replace(/\\left\(/g, '(');
  latex = latex.replace(/\\right\)/g, ')');
  let replaced = null;
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
      let selected = null;
      if (value in units) {
        selected = units[value];
      } else {
        for (const symbol in units) {
          const unit = units[symbol];
          if (unit.NAME == value) {
            selected = unit;
            break;
          }
        }
      }
      if (!selected) {
        let maxSimilarity = 0;
        const value_ = value.toLowerCase();
        for (const symbol in units) {
          const unit = units[symbol];
          const max = Math.max(similarity(value_, symbol.toLowerCase()), similarity(value_, unit.NAME.toLowerCase()));
          if (maxSimilarity < max) {
            maxSimilarity = max;
            selected = unit;
          }
        }
        if (maxSimilarity < 0.6) throw "No similar unit.";
        corrected.push([value, selected.SYMBOL]);
      }
      return '$$' + JSON.stringify(selected.UNITLESS) + '$$';
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

  return {unitless: JSON.parse(latex.split('$$')[1]), corrected};
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
    if (!(type in unitless1.types)) {
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
  let replaced = null;
  while (replaced != str) {
    str = replaced || str;
    replaced = str.replace(src, dst);
  }
  return str;
};


/**
 * http://stackoverflow.com/questions/10473745/compare-strings-javascript-return-of-likely
 */

const similarity = (s1, s2) => {
  let longer = s1;
  let shorter = s2;
  if (s1.length < s2.length) {
    longer = s2;
    shorter = s1;
  }
  const longerLength = longer.length;
  if (longerLength == 0) {
    return 1.0;
  }
  return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
};

const editDistance = (s1, s2) => {
  const costs = [];
  for (let i = 0; i <= s1.length; i++) {
    let lastValue = i;
    for (let j = 0; j <= s2.length; j++) {
      if (i == 0)
        costs[j] = j;
      else {
        if (j > 0) {
          let newValue = costs[j - 1];
          if (s1.charAt(i - 1) != s2.charAt(j - 1))
            newValue = Math.min(Math.min(newValue, lastValue),
                costs[j]) + 1;
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0)
      costs[s2.length] = lastValue;
  }
  return costs[s2.length];
};