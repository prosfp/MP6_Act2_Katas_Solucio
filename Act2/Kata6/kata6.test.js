const { tree } = require('./kata6');

describe('Kata #6.1: tree object', () => {
  // tree.species; // 'appleTree'
  test("hauria de tenir la propiestat 'species' amb el valor 'appleTree' ", () => {
    expect(tree.species).toBe('appleTree');
  });

  // tree.fruit; // 'apple'
  test("hauria de tenir la propiestat 'fruit' amb el valor 'apple' ", () => {
    expect(tree.fruit).toBe('apple');
  });
});
