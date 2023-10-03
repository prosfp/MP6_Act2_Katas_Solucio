const { tree } = require('./kata6');
const { getFruit } = require('./kata62');

describe('Kata #6.2: funcion getFruit', () => {
  test('should return the value of the fruit when defined', () => {
    expect(getFruit(tree)).toBe('apple');
  });

  test('should return the string "No fruit" when fruit is not defined', () => {
    // Clonar l'objecte tree per no modificar l'original
    const treeWithNoFruit = { ...tree };
    // Eliminar la propiedad fruit del nuevo objeto
    delete treeWithNoFruit.fruit;

    expect(getFruit(treeWithNoFruit)).toBe('No fruit');
  });
});
