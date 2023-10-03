const repeatString = require('./kata2');

describe('Kata #2: repeatString', () => {
  test("should return '' when given ('JavaScript', 0) es ", () => {
    expect(repeatString('JavaScript', 0)).toBe('');
  });

  test("should return ' when given ('miau', 1) es 'miau", () => {
    expect(repeatString('miau', 1)).toBe('miau');
  });

  test('should return "holaholahola" when given ("hola", 3)', () => {
    expect(repeatString('hola', 3)).toBe('holaholahola');
  });

  test("should return '??????????' when given ('?', 10) es ", () => {
    expect(repeatString('?', 10)).toBe('??????????');
  });
});
