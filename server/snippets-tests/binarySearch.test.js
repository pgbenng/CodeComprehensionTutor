export const binarySearchTests = `describe('unit tests for binarySearch.js sample code snippet', () => {
  it('should return -1 for empty array. Inputs: foo([],6)', () => {
    expect(foo([], 6)).toEqual(-1);
  });

  it('should return correct index for array with one element. Inputs: foo(foo([1], 1)) and (foo([1], 2))', () => {
    expect(foo([1], 1)).toEqual(0);
    expect(foo([1], 2)).toEqual(-1);
  });

  it('should return correct index for target at beginning. Inputs: foo([1,2,3,4,5],1)', () => {
    expect(foo([1, 2, 3, 4, 5], 1)).toEqual(0);
  });

  it('should return correct index for target in middle. Inputs: foo([1, 2, 3, 4, 5], 3)', () => {
    expect(foo([1, 2, 3, 4, 5], 3)).toEqual(2);
  });

  it('should return correct index for target at end. Inputs: foo([1, 2, 3, 4, 5], 5)'  , () => {
    expect(foo([1, 2, 3, 4, 5], 5)).toEqual(4);
  });

  it('should return -1 when target is not in array. Inputs: foo([1, 2, 3, 4, 5], 6)', () => {
    expect(foo([1, 2, 3, 4, 5], 6)).toEqual(-1);
  });
});`;
