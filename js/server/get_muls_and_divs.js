const app = require('../app/index');

module.exports = (mulPairs, divPairs) => {
  const muls = [];
  const divs = [];

  const queue = [];
  mulPairs.forEach(mulPair => {
    const type = mulPair[0];
    const symbol = mulPair[1];
    queue.push({
      cls: app.getUnit(type, symbol),
      inverse: false
    });
  });
  divPairs.forEach(divPair => {
    const type = divPair[0];
    const symbol = divPair[1];
    queue.push({
      cls: app.getUnit(type, symbol),
      inverse: true
    });
  });

  while (queue.length > 0) {
    const e = queue.shift();
    if (e.cls.BASE) {
      (e.inverse ? divs : muls).push(e.cls);
    } else {
      e.cls.MULS.forEach(mul => {
        queue.push({
          cls: mul,
          inverse: e.inverse
        });
      });
      e.cls.DIVS.forEach(div => {
        queue.push({
          cls: div,
          inverse: !e.inverse
        });
      });
    }
  }

  return {muls, divs}
};