module.exports = (muls, divs) => {
  const mulClasses = [];
  const divClasses = [];

  const queue = [];
  muls.forEach(mul => {
    const type = mul[0];
    const symbol = mul[1];
    queue.push({
      cls: app.getUnitClass(type, symbol),
      inverse: false
    });
  });
  divs.forEach(div => {
    const type = div[0];
    const symbol = div[1];
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