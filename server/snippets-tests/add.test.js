export const addTests = `describe('unit tests for add.js sample code snippet', () => {
  it('should add two positive integers correctly. Inputs: foo(1,2) ', () => {
    expect(foo(1, 2)).toEqual(3);
  });

  it('should return the same number if 0 is added. Inputs: foo(1,0) and foo(0,1)', () => {
    expect(foo(1, 0)).toEqual(1);
    expect(foo(0, 1)).toEqual(1);
  });

  it('should add two negative numbers correctly. Inputs: foo(-1,-1)', () => {
    expect(foo(-1, -1)).toEqual(-2);
  });

  it('should add a positive and negative number correctly. Inputs: foo(-1,1)', () => {
    expect(foo(-1, 1)).toEqual(0);
  });
});`;
