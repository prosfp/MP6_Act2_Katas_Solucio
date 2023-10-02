const removeFirstAndLast = require('./kata3');

describe('Kata #4: removeFirstAndLast', () => {
  test("de 'JavaScript' es 'avaScrip", () => {
    expect(eliminaPrimerUltimo('JavaScript')).toBe('avaScrip');
  });

  test("de 'Alejandría' es 'lejandrí'", () => {
    expect(eliminaPrimerUltimo('Alejandría')).toBe('lejandrí');
  });

  test("de 'hidrógeno' es 'idrógen'", () => {
    expect(eliminaPrimerUltimo('hidrógeno')).toBe('idrógen');
  });

  test("de 'ok' es 'ok'", () => {
    expect(eliminaPrimerUltimo('ok')).toBe('ok');
  });
});
