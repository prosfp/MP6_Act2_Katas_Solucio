const { plantTree } = require('./kata9');

describe('.setFruit()', () => {
  test('should throw an error when called with invalid parameters', () => {
    const tree = plantTree('pearTree', 'pear');
    expect(() => {
      tree.setFruit(12);
    }).toThrowError('Invalid value');

    expect(tree.getFruit()).toEqual('pear');
  });
});
//https://jestjs.io/docs/expect
