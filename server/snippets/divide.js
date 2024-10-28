export const divide = {
  function: (x, y) => {
    // Assume x and y are numbers

    if (y === 0) return 'Undefined';
    return x / y;
  },
  display:
    "function foo(x, y) {\n  // Assume x and y are numbers\n\n  if (y === 0) return 'Undefined';\n  return x / y;\n}",
};
