const app = require('../app');

module.exports = (mulPairs, divPairs) => {
  const mulClasses = [];
  const divClasses = [];

  const queue = [];
  mulPairs.forEach(mulPair => {
    const type = mulPair[0];
    const symbol = mulPair[1];
    queue.push({
      cls: app.getUnitClass(type, symbol),
      inverse: false
    });
  });
  divPairs.forEach(divPair => {
    const type = divPair[0];
    const symbol = divPair[1];
    queue.push({
      cls: app.getUnitClass(type, symbol),
      inverse: true
    });
  });

  while (queue.length > 0) {
    const e = queue.shift();
    if (e.cls.BASE) {
      (e.inverse ? divClasses : mulClasses).push(e.cls);
    } else {
      e.cls.MULS.forEach(mulClass => {
        queue.push({
          cls: mulClass,
          inverse: e.inverse
        });
      });
      e.cls.DIVS.forEach(divClass => {
        queue.push({
          cls: divClass,
          inverse: !e.inverse
        });
      });
    }
  }

  return {mulClasses, divClasses}
};