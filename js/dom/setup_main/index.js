const Server = require('../../server');
const app = require('../../app');

const MAX_SHOWN = 10;
var scrollHandler = null;

module.exports = () => {
  const $input = $('#input');
  var config = {
    handlers: {
      edit: () => {
        $input.removeClass('active error');
      }
    }
  };
  var mathField = MQ.MathField($input[0], config);
  const $equal = $('#equal');
  $equal.click(()=> {
    try {
      const unitless = Server.evalLaTeX(mathField.latex());
      const combinations = Server.search(unitless);
      $('.result-container:not(.template)').remove();

      if (scrollHandler) $(window).off('scroll', scrollHandler);
      scrollHandler = () => {
        const $lastContainer = $('.container:not(.template)').last();
        if ($lastContainer.offset().top + $lastContainer.outerHeight() < $(window).scrollTop() + $(window).height()) {
          console.log('a');
          var i = 0;
          while (combinations.length) {
            const combination = combinations.shift();
            renderCombination(unitless, combination);
            if (i++ >= MAX_SHOWN) break;
          }
        }
      };
      scrollHandler();
      $(window).scroll(scrollHandler);

      $input.addClass('active');
    } catch (err) {
      console.error(err);
      $input.addClass('error');
    }
  });
  $input.keyup(function (event) {
    if (event.keyCode == 13) {
      $equal.click();
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
  const $templateSelectorWrapper = $resultContainer.find('.selector-wrapper.template');
  for (const [unitClass] of powers) {
    const quantity = unitClass.TYPE;
    const $selectorWrapper = $templateSelectorWrapper.clone();
    $selectorWrapper.removeClass('template');
    $selectorWrapper.find('.quantity').text(quantity);
    const $selected = $selectorWrapper.find('.selected');
    $selected.text(unitClass.SYMBOL);
    const $ul = $selectorWrapper.find('ul');
    const unitClasses = app.getUnitClasses(quantity);
    for (const symbol in unitClasses) {
      const $li = $(`<li>${symbol}</li>`);
      $li.click(function () {
        const symbol = $(this).text();
        $selected.text(symbol);
        for (const power of powers) {
          const unitClass = unitClasses[symbol];
          if (power[0].TYPE == quantity) {
            factor /= Math.pow(power[0].QUANTITY, power[1]);
            power[0] = unitClass;
            factor *= Math.pow(power[0].QUANTITY, power[1]);
          }
        }
        const latex = getLaTeX(unitless, factor, powers);
        staticMath.latex(latex);
      });
      $ul.append($li);
    }
    $selectorWrapper.insertBefore($templateSelectorWrapper);
  }
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