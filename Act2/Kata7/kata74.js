function plantTree(species, fruit) {
  if (typeof species !== 'string' || typeof fruit !== 'string') {
    return null;
  }

  // Aquestes variables son inaccessibles des de fora
  let _species = species;
  let _fruit = fruit;

  return {
    get Fruit() {
      return _fruit;
    },
    get Species() {
      return _species;
    },
    set Fruit(value) {
      if (typeof value === 'string') {
        _fruit = value;
      }
    },
    set Species(value) {
      if (typeof value === 'string') {
        _species = value;
      }
    },
  };
}

module.exports = { plantTree };
