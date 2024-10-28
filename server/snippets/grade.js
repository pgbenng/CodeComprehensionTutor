export const grade = {
  function: (x) => {
    // Assume x is a number

    switch (true) {
      case x > 100 || x < 0:
        return 'Invalid!';
      case x >= 90:
        return 'A+';
      case x >= 85:
        return 'A';
      case x >= 80:
        return 'A-';
      case x >= 76:
        return 'B+';
      case x >= 72:
        return 'B';
      case x >= 68:
        return 'B-';
      default:
        return 'C+ or lower';
    }
  },
  display:
    "function foo(x) {\n  // Assume x is a number\n\n  switch (true) {\n    case x > 100 || x < 0:\n      return 'Invalid!';\n     case x >= 90:\n      return 'A+';\n    case x >= 85:\n      return 'A';\n    case x >= 80:\n      return 'A-';\n    case x >= 76:\n      return 'B+';\n    case x >= 72:\n      return 'B';\n    case x >= 68:\n      return 'B-';\n    default:\n      return 'C+ or lower';\n  }\n}",
};
