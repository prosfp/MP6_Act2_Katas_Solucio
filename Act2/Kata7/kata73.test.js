const { plantTree } = require('./kata73');

describe('Kata #7.3: plantTree()', () => {
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

    expect(arbol).toHaveProperty('Fruit');
    expect(arbol).toHaveProperty('Species');

    // Provem específicament que no tinguin les propietats que volem amagar
    expect(arbol).not.toHaveProperty('fruit');
    expect(arbol).not.toHaveProperty('species');
  });

  test('should return the fruit when calling getFruit() ', () => {
    const arbol = plantTree('pearTree', 'pear');
    expect(arbol.Fruit).toBe('pear');
  });

  test('all invocar su getter getSpecies devuelve "pearTree"', () => {
    const arbol = plantTree('pearTree', 'pear');

    expect(arbol.Species).toBe('pearTree');
  });
});
