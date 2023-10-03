function plantTree(species, fruit) {
  if (typeof species !== 'string' || typeof fruit !== 'string') {
    return null;
  }

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
      if (typeof value !== 'string') {
        throw new Error();
      }

      if (!_fruit.match(`^[${value}]{3}`)) {
        throw new Error();
      }
      _fruit = value;
    },

    set Species(value) {
      if (typeof value !== 'string') {
        throw new Error();
      }
      _species = value;
    },
  };
}

module.exports = { plantTree };
