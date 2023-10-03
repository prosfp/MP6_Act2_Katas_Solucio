const removeSpaces = require('./kata4');

describe('Kata #4: removeSpaces', () => {
  test("de 'buenos días' es 'buenosdías'", () => {
    expect(removeSpaces('buenos días')).toBe('buenosdías');
  });

  test("de '   pastel de zanahoria   ' es 'pasteldezanahoria'", () => {
    expect(removeSpaces('   pastel de zanahoria   ')).toBe('pasteldezanahoria');
  });

  test("de 'dábale arroz a la zorra el abad' es 'dábalearrozalazorraelabad'", () => {
    expect(removeSpaces('dábale arroz a la zorra el abad')).toBe(
      'dábalearrozalazorraelabad'
    );
  });
});
