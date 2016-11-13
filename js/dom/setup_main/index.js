const Server = require('../../server');
const app = require('../../app');

module.exports = () => {
  const $input = $('#input');
  var mathField = MQ.MathField($input[0]);
  $input.keyup(function (event) {
    if (event.keyCode == 13) {

      const unitless = Server.refineLaTeX(mathField.latex());
      if (isNaN(unitless)) {
        const combinations = Server.search(unitless);
        $('.result-container:not(.template)').remove();
        const MAX_SHOWN = 10;
        combinations.every((combination, i) => {
          renderCombination(unitless, combination);
          return i + 1 < MAX_SHOWN;
        });
      }
    }
  });
};

const renderCombination = (unitless, combination) => {
  var factor = 1;
  const powers = [];

  for (const quantities of [combination.derivedQuantities, combination.baseQuantities]) {
    for (const quantity in quantities) {
      const unitClass = app.getStandardUnitClass(quantity);
      factor *= Math.pow(unitClass.QUANTITY, quantities[quantity]);
      powers.push([unitClass, quantities[quantity]]);
    }
  }

  const latex = getLaTeX(unitless, factor, powers);

  const $templateResultContainer = $('.result-container.template');
  const $resultContainer = $templateResultContainer.clone();
  const $answer = $resultContainer.find('.answer');
  $resultContainer.removeClass('template');
  $answer.text(latex);
  var staticMath = MQ.StaticMath($answer[0]);
  $resultContainer.insertBefore($templateResultContainer);
};

const getLaTeX = (unitless, factor, powers) => {
  var mulSymbols = [], divSymbols = [];
  for (const power of powers) {
    if (power[1] > 0) {
      if (power[1] > 1) {
        mulSymbols.push(power[0].SYMBOL + '^' + power[1]);
      } else {
        mulSymbols.push(power[0].SYMBOL);
      }
    } else {
      if (power[1] < -1) {
        divSymbols.push(power[0].SYMBOL + '^' + -power[1]);
      } else {
        divSymbols.push(power[0].SYMBOL);
      }
    }
  }
  var value = unitless.quantity / factor;
  if (Math.abs(value) > 1e5 || Math.abs(value) < 1e-5) {
    value = value.toExponential(5);
  } else {
    value = value.toPrecision(5);
  }
  var latex = value + '\\ ' + mulSymbols.join('\\cdot ');
  if (divSymbols.length) {
    if (divSymbols.length > 1) {
      latex += ' / (' + divSymbols.join('\\cdot ') + ')';
    } else {
      latex += ' / ' + divSymbols[0];
    }
  }
  return latex;
};