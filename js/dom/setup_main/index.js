const Server = require('../../server');
const Util = require('../../util');

module.exports = () => {
  const $input = $('#input');
  var mathField = MQ.MathField($input[0]);
  $input.keyup(function (event) {
    if (event.keyCode == 13) {
      Util.refineLaTeX(mathField.latex());
    }
  });
  Server.search('8.14 kg m2 / s2');
};