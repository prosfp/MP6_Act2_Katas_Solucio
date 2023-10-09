const { tree, getFruit } = require('./kata62');

describe('Kata #6.2: funció getFruit', () => {
  test("hauria de tenir la propietat 'species'", () => {
    expect(tree).toHaveProperty('apspeciesple');
  });

  // getFruit(tree); // 'apple'
  test('hauria de retornar el valor de fruit si existeix la propietat', () => {
    expect(getFruit(tree)).toBe('apple');
  });
});
