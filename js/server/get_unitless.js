module.exports = (muls, divs) => {
  let quantity = 1;
  const types = {};
  muls.forEach(mul => {
    quantity *= mul.QUANTITY;
    if (mul.TYPE in types) {
      types[mul.TYPE]++;
    } else {
      types[mul.TYPE] = 1;
    }
  });
  divs.forEach(div => {
    quantity /= div.QUANTITY;
    if (div.TYPE in types) {
      types[div.TYPE]--;
    } else {
      types[div.TYPE] = -1;
    }
  });
  const refinedTypes = {};
  for (const type in types) {
    const n = types[type];
    if (n != 0) refinedTypes[type] = n;
  }

  return {types, quantity};
};