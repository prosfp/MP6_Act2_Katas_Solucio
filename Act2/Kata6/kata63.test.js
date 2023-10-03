const { tree } = require('./kata63');

describe('tree.getFruit()', () => {
  test('should be defined', () => {
    expect(tree.getFruit).toBeDefined();
  });

  test('should be a function', () => {
    expect(typeof tree.getFruit).toBe('function');
  });

  test('should the value of the fruit when called', () => {
    expect(tree.getFruit()).toBe('apple');
  });
});
