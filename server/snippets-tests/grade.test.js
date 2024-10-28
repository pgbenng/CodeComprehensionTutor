export const gradeTests = `describe('unit tests for grade.js sample code snippet', () => {
  it('should return Invalid if grade is over 100 or below 0. Inputs: foo(-1) and foo(101)', () => {
    expect(foo(-1)).toEqual('Invalid!');
    expect(foo(101)).toEqual('Invalid!');
  });

  it('should return A+ if grade is between 90 and 100. Input: foo(90), foo(95), foo(100)', () => {
    expect(foo(90)).toEqual('A+');
    expect(foo(95)).toEqual('A+');
    expect(foo(100)).toEqual('A+');
  });

  it('should return A if grade is between 85 and 89. Inputs: foo(85), foo(89), foo(87)', () => {
    expect(foo(85)).toEqual('A');
    expect(foo(89)).toEqual('A');
    expect(foo(87)).toEqual('A');
  });

  it('should return A- if grade is between 80 and 84. Inputs: foo(80), foo(84), foo(82)', () => {
    expect(foo(80)).toEqual('A-');
    expect(foo(84)).toEqual('A-');
    expect(foo(82)).toEqual('A-');
  });

  it('should return B+ if grade is between 76 and 79. Inputs: foo(76), foo(79), foo(78)', () => {
    expect(foo(76)).toEqual('B+');
    expect(foo(79)).toEqual('B+');
    expect(foo(78)).toEqual('B+');
  });

  it('should return B if grade is between 72 and 75. Inputs: foo(72), foo(75), foo(74)', () => {
    expect(foo(72)).toEqual('B');
    expect(foo(75)).toEqual('B');
    expect(foo(74)).toEqual('B');
  });

  it('should return B- if grade is between 68 and 71. Inputs: foo(68), foo(71), foo(70)', () => {
    expect(foo(68)).toEqual('B-');
    expect(foo(71)).toEqual('B-');
    expect(foo(70)).toEqual('B-');
  });

  it('should return C+ or lower if grade is between 0 and 67. Inputs: foo(0), foo(67), foo(35)', () => {
    expect(foo(0)).toEqual('C+ or lower');
    expect(foo(67)).toEqual('C+ or lower');
    expect(foo(35)).toEqual('C+ or lower');
  });
});`;
