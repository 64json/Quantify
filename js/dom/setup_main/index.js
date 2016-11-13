const Server = require('../../server');

module.exports = () => {
  const $input = $('#input');
  var mathField = MQ.MathField($input[0]);
  $input.keyup(function (event) {
    if (event.keyCode == 13) {
      const unitless = Server.refineLaTeX(mathField.latex());
      console.log(unitless);
      if (isNaN(unitless)) {
        const combinations = Server.search(unitless);
        console.log(combinations);
      }
    }
  });
};