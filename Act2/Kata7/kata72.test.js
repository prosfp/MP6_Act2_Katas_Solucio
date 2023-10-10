const { plantTree } = require('./kata72');
describe('Kata #7.2:', () => {
  test('should return an objet with species fruit and getFruit properties when parameters are valid', () => {
    const arbre = plantTree('perera', 'pera');
    expect(arbre).toHaveProperty('_species');
    expect(arbre).toHaveProperty('_fruit');
    expect(arbre).toHaveProperty('getFruit');
    expect(arbre).toHaveProperty('getSpecies');
  });

  test('should return the value of the fruit when calling .getFruit()', () => {
    const arbre = plantTree('pomera', 'poma');

    expect(arbre.getFruit()).toBe('poma');
  });
});
