const { plantTree } = require('./kata74');

describe('Kata #7.4 plantTree()', () => {
  test('should update the fruit and species properties', () => {
    const tree = plantTree('pearTree', 'pear');
    tree.Fruit = 'apple';
    expect(tree.Fruit).toEqual('apple');
    tree.Species = 'appleTree';
    expect(tree.Species).toEqual('appleTree');
  });
});
