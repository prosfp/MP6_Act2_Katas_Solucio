const { plantTree } = require('./kata73');

describe('Kata #9.3: plantTree()', () => {
  test('should return null when some parameter is invalid', () => {
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

  test('should have only 2 properties getFruit and getSpecies', () => {
    const arbol = plantTree('pearTree', 'pear');

    expect(arbol).toHaveProperty('getFruit');
    expect(arbol).toHaveProperty('getSpecies');

    // Especificamente probamos que no tengan las propiedades que queremos esconder
    expect(arbol).not.toHaveProperty('fruit');
    expect(arbol).not.toHaveProperty('species');
  });

  test('should return the fruit when calling getFruit() ', () => {
    const arbol = plantTree('pearTree', 'pear');

    expect(arbol.getFruit()).toBe('pear');
  });

  test('all invocar su getter getSpecies devuelve "pearTree"', () => {
    const arbol = plantTree('pearTree', 'pear');

    expect(arbol.getSpecies()).toBe('pearTree');
  });
});
