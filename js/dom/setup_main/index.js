const Server = require('../../server');
const app = require('../../app');

const PER_PAGE = 10;
let scrollHandler = null;

module.exports = () => {
  const $input = $('#input');
  let config = {
    handlers: {
      edit: () => {
        $input.removeClass('active error');
      }
    }
  };
  let mathField = MQ.MathField($input[0], config);
  const $equal = $('#equal');
  $equal.click(()=> {
    try {
      const unitless = Server.evalLaTeX(mathField.latex());
      const combinations = Server.search(unitless);
      $('.result-container:not(.template)').remove();

      if (scrollHandler) $(window).off('scroll', scrollHandler);
      scrollHandler = () => {
        const $lastContainer = $('.container:not(.template)').last();
        const scrollBottom = $(window).scrollTop() + $(window).height();
        if ($lastContainer.offset().top + $lastContainer.outerHeight() < scrollBottom) {
          let i = 0;
          while (combinations.length) {
            const combination = combinations.shift();
            renderCombination(unitless, combination);
            if (i++ >= PER_PAGE) break;
          }
        }
        $('.result-container:not(.appear):not(.template)').each(function () {
          if ($(this).offset().top < scrollBottom) {
            $(this).addClass('appear');
          }
        });
      };
      scrollHandler();
      $(window).scroll(scrollHandler);

      $('html, body').animate({
        scrollTop: $('.search-container').offset().top
      }, 300);
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

  const $templateUnitWrapper = $('.unit-wrapper.template');
  const units = app.getUnits(true);
  for (const quantity in units) {
    const $unitWrapper = $templateUnitWrapper.clone();
    $unitWrapper.removeClass('template');
    $unitWrapper.find('.quantity').text(quantity);
    for (const symbol in units[quantity]) {
      $unitWrapper.find('ul').append(`<li>${symbol} (${units[quantity][symbol].NAME})</li>`);
    }
    $unitWrapper.insertBefore($templateUnitWrapper);
  }
};

const renderCombination = (unitless, combination) => {
  let factor = 1;
  const powers = [];

  for (const quantities of [combination.derivedQuantities, combination.baseQuantities]) {
    for (const quantity in quantities) {
      const unit = app.getStandardUnit(quantity);
      factor *= Math.pow(unit.QUANTITY, quantities[quantity]);
      powers.push([unit, quantities[quantity]]);
    }
  }

  const latex = getLaTeX(unitless, factor, powers);

  const $templateResultContainer = $('.result-container.template');
  const $resultContainer = $templateResultContainer.clone();
  const $answer = $resultContainer.find('.answer');
  $resultContainer.removeClass('template');
  $answer.text(latex);
  let staticMath = MQ.StaticMath($answer[0]);
  $resultContainer.insertBefore($templateResultContainer);
  const $templateSelectorWrapper = $resultContainer.find('.selector-wrapper.template');
  for (const [unit] of powers) {
    const quantity = unit.TYPE;
    const $selectorWrapper = $templateSelectorWrapper.clone();
    $selectorWrapper.removeClass('template');
    $selectorWrapper.find('.quantity').text(quantity);
    const $selected = $selectorWrapper.find('.selected');
    $selected.text(unit.SYMBOL);
    const $ul = $selectorWrapper.find('ul');
    const units = app.getUnits(quantity);
    for (const symbol in units) {
      const $li = $(`<li>${symbol}</li>`);
      $li.click(function () {
        const symbol = $(this).text();
        $selected.text(symbol);
        for (const power of powers) {
          const unit = units[symbol];
          if (power[0].TYPE == quantity) {
            factor /= Math.pow(power[0].QUANTITY, power[1]);
            power[0] = unit;
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
  let mulSymbols = [], divSymbols = [];
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
  let value = unitless.quantity / factor;
  if (Math.abs(value) > 1e5 || Math.abs(value) < 1e-5) {
    value = value.toExponential(5);
  } else {
    value = value.toPrecision(6);
  }
  let latex = value + '\\ ' + mulSymbols.join('\\cdot ');
  if (divSymbols.length) {
    if (divSymbols.length > 1) {
      latex += ' / (' + divSymbols.join('\\cdot ') + ')';
    } else {
      latex += ' / ' + divSymbols[0];
    }
  }
  return latex;
};