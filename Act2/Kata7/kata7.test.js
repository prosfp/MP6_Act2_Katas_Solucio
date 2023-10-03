const { plantTree } = require('./kata7');

describe('Kata #9.1: plantarArbol(species, fruit)', () => {
  test('should return null when called with invalid parameters', () => {
    let arbol = plantTree('appleTree', 1);
    expect(arbol).toBeNull();

    arbol = plantTree(1, 'appleTree');
    expect(arbol).toBeNull();

    arbol = plantTree(1, 1);
    expect(arbol).toBeNull();

    arbol = plantTree(null, null);
    expect(arbol).toBeNull();

    arbol = plantTree(undefined, undefined);
    expect(arbol).toBeNull();
  });

  test('should return a valid tree when called with valid parameters', () => {
    // Guardamos el objeto obtenido al ejecutar la funcion en la variable "actual"
    const actual = plantTree('pearTree', 'pear');
    // Creamos una variable con el objeto esperado
    const expected = { species: 'pearTree', fruit: 'pear' };
    // Comparamos el objeto obtenido con el esperado
    expect(actual).toEqual(expected);
  });
});
