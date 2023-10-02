const evenOdd = require('./kata1');

describe('.evenOdd(number)', () => {
  test('should return "Parell" when given 0"', () => {
    expect(evenOdd(0)).toBe('Parell');
  });

  test('should return "Senar" when given 1', () => {
    expect(evenOdd(1)).toBe('Senar');
  });

  test('should return "Parell" when given 2', () => {
    expect(evenOdd(2)).toBe('Paell');
  });

  test('should return "Senar" when given 3', () => {
    expect(evenOdd(3)).toBe('Senar');
  });
});
