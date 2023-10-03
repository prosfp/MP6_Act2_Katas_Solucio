const { plantTree } = require('./kata9');

describe('Kata #9: Try / Catch', () => {
  describe('setFruit()', () => {
    test('should throw an error when called with invalid parameters', () => {
      const tree = plantTree('pearTree', 'pear');
      expect(() => {
        tree.setFruit(12);
      }).toThrow();

      expect(tree.getFruit()).toEqual('pear');
    });
  });
});

//https://jestjs.io/docs/expect
