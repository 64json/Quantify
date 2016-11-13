const Server = require('../../server');
const app = require('../../app');

module.exports = () => {
  const $input = $('#input');
  var mathField = MQ.MathField($input[0]);
  $input.keyup(function (event) {
    if (event.keyCode == 13) {

      const unitless = Server.refineLaTeX(mathField.latex());
      var factor = 1;
      if (isNaN(unitless)) {
        const combinations = Server.search(unitless);
        console.log(combinations);
        combinations.forEach(combination => {
          const powers = [];
          for (const quantities of [combination.derivedQuantities, combination.baseQuantities]) {
            for (const quantity in quantities) {
              const unitClass = app.getStandardUnitClass(quantity);
              factor *= Math.pow(unitClass.QUANTITY, quantities[quantity]);
              powers.push([unitClass, quantities[quantity]]);
            }
          }

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
          var latex = unitless.quantity * factor + ' ' + mulSymbols.join(' * ');
          if (divSymbols.length) {
            if (divSymbols.length > 1) {
              latex += ' / (' + divSymbols.join(' * ') + ')';
            } else {
              latex += ' / ' + divSymbols[0];
            }
          }
          console.log(latex);
        });
      }
    }
  });
};