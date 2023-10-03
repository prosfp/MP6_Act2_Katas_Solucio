function plantTree(species, fruit) {
  if (typeof species !== 'string' || typeof fruit !== 'string') {
    return null;
  }

  let _species = species;
  let _fruit = fruit;

  return {
    getFruit() {
      return _fruit;
    },
    getSpecies() {
      return _species;
    },
    setFruit(value) {
      if (typeof value !== 'string') {
        throw new Error();
      }
      _fruit = value;
    },
    setSpecies(value) {
      if (typeof value !== 'string') {
        throw new Error();
      }
      _species = value;
    },
  };
}

module.exports = { plantTree };
