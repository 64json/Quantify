module.exports = (common) => {
  return common ? [
    [1e3, 'k', 'kilo'],
    [1e-2, 'c', 'centi'],
    [1e-3, 'm', 'milli'],
    [1e-6, 'µ', 'micro'],
    [1e-9, 'n', 'nano']
  ] : [
    [1e24, 'Y', 'yotta'],
    [1e21, 'Z', 'zetta'],
    [1e18, 'E', 'exa'],
    [1e15, 'P', 'peta'],
    [1e12, 'T', 'tera'],
    [1e9, 'G', 'giga'],
    [1e6, 'M', 'mega'],
    [1e2, 'h', 'hecto'],
    [1e1, 'da', 'deka'],
    [1e-1, 'd', 'deci'],
    [1e-12, 'p', 'pico'],
    [1e-15, 'f', 'femto'],
    [1e-18, 'a', 'atto'],
    [1e-21, 'z', 'zepto'],
    [1e-24, 'y', 'yocto']
  ];
};