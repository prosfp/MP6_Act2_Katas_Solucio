function plantTree(species, fruit) {
  //comprovem que els paràmetres son strings
  if (typeof species !== 'string' && typeof fruit !== 'string') {
    return null;
  }

  // Aquestes variables no son accessibles des de fora
  let _species = species;
  let _fruit = fruit;

  return {
    get Fruit() {
      return _fruit;
    },
    get Species() {
      return _species;
    },
    set Fruit(fruita) {
      _fruit = fruita;
    },
    set Species(especie) {
      _species = especie;
    },
  };
}

module.exports = { plantTree };
