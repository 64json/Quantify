module.exports = (mulClasses, divClasses) => {
  var quantity = 1;
  const types = {};
  mulClasses.forEach(mulClass => {
    quantity *= mulClass.QUANTITY;
    if (types.hasOwnProperty(mulClass.TYPE)) {
      types[mulClass.TYPE]++;
    } else {
      types[mulClass.TYPE] = 1;
    }
  });
  divClasses.forEach(divClass => {
    quantity /= divClass.QUANTITY;
    if (types.hasOwnProperty(divClass.TYPE)) {
      types[divClass.TYPE]--;
    } else {
      types[divClass.TYPE] = -1;
    }
  });
  const refinedTypes = {};
  for (const type in types) {
    const n = types[type];
    if (n != 0) refinedTypes[type] = n;
  }

  return {types, quantity};
};