const removeFirstAndLast = require('./kata3');

describe('Kata #3: removeFirstAndLast', () => {
  test("de 'JavaScript' es 'avaScrip", () => {
    expect(removeFirstAndLast('JavaScript')).toBe('avaScrip');
  });

  test("de 'Alejandría' es 'lejandrí'", () => {
    expect(removeFirstAndLast('Alejandría')).toBe('lejandrí');
  });

  test("de 'hidrógeno' es 'idrógen'", () => {
    expect(removeFirstAndLast('hidrógeno')).toBe('idrógen');
  });

  test("de 'ok' es 'ok'", () => {
    expect(removeFirstAndLast('ok')).toBe('ok');
  });
});
