const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
  test('should multiply two positive integers correctly', () => {
    const result = multiply(3, 2);
    expect(result).toBe(6);
  });

  test('should multiply one positive integer and one negative integer correctly', () => {
    const result = multiply(-4, 2);
    expect(result).toBe(-8);
  });

  test('should multiply any number and a number 0 correctly', () => {
    const result = multiply(3, 0);
    expect(result).toBe(0);
  });
});
