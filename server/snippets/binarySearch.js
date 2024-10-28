export const binarySearch = {
  function: (arr, target) => {
    // Assume arr is an array of numbers, and target is a number

    let l = 0;
    let r = arr.length - 1;

    while (l <= r) {
      const m = Math.floor((l + r) / 2);
      if (arr[m] === target) {
        return m;
      } else if (arr[m] < target) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    }
    return -1;
  },
  display:
    'function foo(arr, target) {\n  // Assume arr is an array of numbers, and target is a number\n\n  let l = 0;\n  let r = arr.length - 1;\n\n  while (l <= r) {\n    const m = Math.floor((l + r) / 2);\n    if (arr[m] === target) {\n      return m;\n    } else if (arr[m] < target) {\n      l = m + 1;\n    } else {\n      r = m - 1;\n    }\n  }\n  return -1;\n}',
};
