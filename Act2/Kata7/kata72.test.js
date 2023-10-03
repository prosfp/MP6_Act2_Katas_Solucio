const { plantTree } = require('./kata72');
describe('Kata #7.2: plantTree()', () => {
  test('should return null when some parameter is not valid', () => {
    let arbol = plantTree('pearTree', 1);
    expect(arbol).toBeNull();

    arbol = plantTree(1, 'pear');
    expect(arbol).toBeNull();

    arbol = plantTree(1, 1);
    expect(arbol).toBeNull();

    arbol = plantTree(null, null);
    expect(arbol).toBeNull();

    arbol = plantTree(undefined, undefined);
    expect(arbol).toBeNull();
  });

  test('should return an objet with species fruit and getFruit properties when parameters are valid', () => {
    const arbol = plantTree('pearTree', 'pear');

    expect(arbol).toHaveProperty('species');
    expect(arbol).toHaveProperty('fruit');
    expect(arbol).toHaveProperty('getFruit');
  });

  test('should return the value of the fruit when calling .getFruit()', () => {
    const arbol = plantTree('pearTree', 'pear');

    expect(arbol.getFruit()).toBe('pear');
  });
});
