const { tree } = require('./kata63');

describe('Kata #6.3: objecte tree amb mètode', () => {
  test('should be defined', () => {
    expect(tree.getFruit).toBeDefined();
  });

  test('should be a function', () => {
    expect(typeof tree.getFruit).toBe('function');
  });

  test('hauria de retornar el valor de la fruita', () => {
    expect(tree.getFruit()).toBe('apple');
  });
});
