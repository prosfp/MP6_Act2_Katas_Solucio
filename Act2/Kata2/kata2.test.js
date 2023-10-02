const repeatString = require('./kata2');

describe('Kata #3: repeatString', () => {
  test("should return '' when given ('JavaScript', 0) es ", () => {
    expect(repiteString('JavaScript', 0)).toBe('');
  });

  test("should return ' when given ('miau', 1) es 'miau", () => {
    expect(repiteString('miau', 1)).toBe('miau');
  });

  test('should return "holaholahola" when given ("hola", 3)', () => {
    expect(repiteString('hola', 3)).toBe('holaholahola');
  });

  test("should return '??????????' when given ('?', 10) es ", () => {
    expect(repiteString('?', 10)).toBe('??????????');
  });
});
