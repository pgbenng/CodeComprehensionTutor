export const sumTests = `describe('unit tests for sum.js sample code snippet', () => {
  it('should return 0 if nums array is empty. Inputs: foo([])', () => {
    expect(foo([])).toEqual(0);
  });

  it('should return the number itself for an array with a single number. Inputs: foo([1])', () => {
    expect(foo([1])).toEqual(1);
  });

  it('should return the correct sum of an array with all positive numbers. Inputs: foo([1,2,3])', () => {
    expect(foo([1, 2, 3])).toEqual(6);
  });

  it('should return the correct sum of an array with all negative numbers. Inputs: foo([-1,-2,-3])', () => {
    expect(foo([-1, -2, -3])).toEqual(-6);
  });

  it('should return the correct sum of an array with both positive and negative numbers. Inputs: foo([-1,2,-3])', () => {
    expect(foo([-1, 2, -3])).toEqual(-2);
  });
});`;
