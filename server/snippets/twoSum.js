export const twoSum = {
  function: (nums, target) => {
    // Assume nums is a list of numbers, and target is a number

    const obj = {};

    for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];

      if (obj.hasOwnProperty(diff)) {
        return [obj[diff], i];
      }

      obj[nums[i]] = i;
    }

    return [];
  },
  display:
    'function foo(nums, target) {\n  // Assume nums is a list of numbers, and target is a number\n\n  const obj = {};\n\n  for (let i = 0; i < nums.length; i++) {\n    const diff = target - nums[i];\n\n    if (obj.hasOwnProperty(diff)) {\n      return [obj[diff], i];\n    }\n\n    obj[nums[i]] = i;\n  }\n\n  return [];\n}',
};
