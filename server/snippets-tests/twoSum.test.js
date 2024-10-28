export const twoSumTests = `describe('unit tests for twoSum.js sample code snippet', () => {
  it('should return empty array if nums array is empty. Inputs: foo([],6)', () => {
    expect(foo([], 6)).toEqual([]);
  });

  it('should return empty array if nums array only has one element. Inputs: foo([1],6)', () => {
    expect(foo([1], 6)).toEqual([]);
  });

  it('should return empty array if no valid pair exists. Inputs: foo([1,2,3,4,5],10)', () => {
    expect(foo([1, 2, 3, 4, 5], 10)).toEqual([]);
  });

  it('should return correct output for valid pair in beginning. Inputs: foo([1,2,3,4,5],3)', () => {
    expect(foo([1, 2, 3, 4, 5], 3)).toEqual([0, 1]);
  });

  it('should return correct output for valid pair in middle. Inputs: foo([1,2,3,4,5],7)', () => {
    expect(foo([1, 2, 3, 4, 5], 7)).toEqual([2, 3]);
  });

  it('should return correct output for valid pair at end. Inputs: foo([1,2,3,4,5],9)', () => {
    expect(foo([1, 2, 3, 4, 5], 9)).toEqual([3, 4]);
  });

  it('should return correct output for negative numbers in array. Inputs: foo([-1,-2,-3,-4,-5],-3)', () => {
    expect(foo([-1, -2, -3, -4, -5], -3)).toEqual([0, 1]);
  });

  it('should return correct output for positive and negative numbers in array. Inputs: foo([1, -2, 3, -4, 5],1)', () => {
    expect(foo([1, -2, 3, -4, 5], 1)).toEqual([1, 2]);
  });

  it('should return correct output for duplicates in arrayInputs: foo([1, 2,2,2,2],3)', () => {
    expect(foo([1, 2, 2, 2, 2], 3)).toEqual([0, 1]);
  });
});`;
