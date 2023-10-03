const { tree } = require('./kata6');

console.log(tree);

describe('Kata #6.1: tree object', () => {
  test('should have an "species" property', () => {
    expect(tree).toHaveProperty('species');
  });

  test('should have an "fruit" property', () => {
    expect(tree).toHaveProperty('fruit');
  });

  test("should have property species with the 'appleTree' value", () => {
    expect(tree.species).toBe('appleTree');
  });

  test("should have property fruit with the 'apple' value", () => {
    expect(tree.fruit).toBe('apple');
  });
});
