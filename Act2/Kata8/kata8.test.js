const { plantTree } = require('./kata8');
describe('Kata #10: plantTree()', () => {
  describe('.getSpecies()', () => {
    test('should return an string with a function named "presentTree"', () => {
      const tree = plantTree('pearTree', 'pear');
      // Este string es especial, hemos extendido su prototipo con nuevos métodos.
      const species = tree.getSpecies();

      expect(typeof species).toBe('string');
      expect(typeof species.presentTree).toBe('function');
    });
  });

  describe('.presentTree()', () => {
    test('should log "Este arbol es un pearTree when called with no parameters', () => {
      const tree = plantTree('pearTree', 'pear');
      const spy = jest.spyOn(console, 'log');

      tree.getSpecies().presentTree();

      expect(spy).toHaveBeenCalledWith('Este árbol es un pearTree');
    });

    test('should log "Este arbol es un pearTree y da pears" when called with "pears" parameter', () => {
      const tree = plantTree('pearTree', 'pear');
      const spy = jest.spyOn(console, 'log');

      tree.getSpecies().presentTree('pears');

      expect(spy).toHaveBeenCalledWith('Este árbol es un pearTree y da pears');
    });
  });
});
