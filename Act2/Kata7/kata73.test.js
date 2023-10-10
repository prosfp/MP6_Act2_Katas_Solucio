const { plantTree } = require('./kata73');
describe('Kata #7.3:', () => {
  test('should return the value of the fruit when calling .getFruit()', () => {
    const arbre = plantTree('pomera', 'poma');
    expect(arbre.Fruit).toBe('poma');
  });
});
