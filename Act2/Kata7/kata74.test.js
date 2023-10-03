const { plantTree } = require('./kata74');

describe('Kata #9: plantTree()', () => {
  test('should have only getters and setters', () => {
    const tree = plantTree('pearTree', 'pear');

    expect(tree).toHaveProperty('getFruit');
    expect(tree).toHaveProperty('getSpecies');
    expect(tree).toHaveProperty('setFruit');
    expect(tree).toHaveProperty('setSpecies');
  });

  describe('getFruit()', () => {
    test('should return the value of the fruit', () => {
      const tree = plantTree('pearTree', 'pear');
      expect(tree.getFruit()).toEqual('pear');
    });
  });

  describe('getSpecies()', () => {
    test('should return the value of the species', () => {
      const tree = plantTree('pearTree', 'pear');
      expect(tree.getSpecies()).toEqual('pearTree');
    });
  });

  describe('setFruit()', () => {
    test('should ignore the new value when called with an invalid string', () => {
      const tree = plantTree('pearTree', 'pear');
      tree.setFruit(12); // No es un string, debería ignorarse
      expect(tree.getFruit()).toEqual('pear');
    });

    test('should set a new value for the fruit when called with a valid string', () => {
      const tree = plantTree('pearTree', 'pear');
      tree.setFruit('Big pear'); // Es un string, debería sobreescribir el valor
      expect(tree.getFruit()).toEqual('Big pear');
    });
  });

  describe('setSpecies()', () => {
    test('should ignore the new value when called with an invalid string', () => {
      const tree = plantTree('pearTree', 'pear');
      tree.setSpecies(12); // No es un string, debería ignorarse
      expect(tree.getSpecies()).toEqual('pearTree');
    });

    test('should set a new value for the fruit when called with a valid string', () => {
      const tree = plantTree('pearTree', 'pear');
      tree.setSpecies('Big pearTree'); // Es un string, debería sobreescribir el valor
      expect(tree.getSpecies()).toEqual('Big pearTree');
    });
  });
});
