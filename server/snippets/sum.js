export const sum = {
  function: (nums) => {
    // Assume nums is a list of numbers

    let res = 0;

    nums.forEach((num) => {
      res += num;
    });

    return res;
  },
  display:
    'function foo(nums) {\n  // Assume nums is a list of numbers\n\n  let res = 0;  \n\n  nums.forEach(num => {\n    res += num;\n  });\n  \n  return res;\n}',
};
