const { plantTree } = require('./kata10');

describe('Kata #10: RegEx', () => {
  describe('when a tree with values "pomer" y "poma" is created', () => {
    test('should throw an error when calling setFruit with "pera"', () => {
      const tree = plantTree('pomer', 'poma');
      expect(() => {
        tree.Fruit = 'pera';
      }).toThrow();

      expect(tree.Fruit).toEqual('pomer');
    });
  });

  describe('when a tree with values "perera" y "poma" is created', () => {
    test('should not throw an error when calling .setFruit with "pera"', () => {
      const tree = plantTree('perera', 'pomer');

      expect(() => {
        tree.Fruit = 'pera';
      }).not.toThrow();

      expect(tree.Fruit).toEqual('pera');
    });
  });
});
