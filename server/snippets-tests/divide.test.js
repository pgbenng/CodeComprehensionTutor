export const divideTests = `describe('unit tests for divide.js sample code snippet', () => {
  it('should return Undefined if second param is 0. Inputs: foo(3,0)', () => {
    expect(foo(3, 0)).toEqual('undefined');
  });

  it('should return 0 if first param is 0.Inputs: foo(0,3) ', () => {
    expect(foo(0, 3)).toEqual(0);
  });

  it('should return correct output when x can be divided by y without remainders. Inputs: foo(9,3)', () => {
    expect(foo(9, 3)).toEqual(3);
  });

  it('should return correct output when x can be divided by y with remainders. Inputs: foo(2,4)', () => {
    expect(foo(2, 4)).toEqual(0.5);
  });

  it('should return correct output when x can be divided by y with infinite trailing decimal numbers. Inputs: foo(1,3)', () => {
    expect(foo(1, 3)).toBeCloseTo(0.33, 2);
  });

  it('should return correct output when both x and y are negative. Inputs: foo(-4,-2)', () => {
    expect(foo(-4, -2)).toEqual(2);
  });

  it('should return correct output when one number is positive and the other is negative. Inputs: foo(-4,2) and foo(4,-2)', () => {
    expect(foo(-4, 2)).toEqual(-2);
    expect(foo(4, -2)).toEqual(-2);
  });
});`;
