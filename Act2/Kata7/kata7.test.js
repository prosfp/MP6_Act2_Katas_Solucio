const { plantTree } = require('./kata7');

describe('Kata #7:', () => {
  plantTree('pearTree', 'pear'); // { species: 'pearTree', fruit: 'pear' }
  test('should be defined', () => {
    const actual = plantTree('perera', 'pera'); //El que sigui
    const expected = { species: 'perera', fruit: 'pera' };
    expect(actual).toEqual({ species: 'perera', fruit: 'pera' });
  });
});
