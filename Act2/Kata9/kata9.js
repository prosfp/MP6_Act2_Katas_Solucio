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
      try {
        if (typeof value === 'string') {
          _fruit = value;
        } else {
          throw new Error('Value must be a string');
        }
      } catch (error) {
        console.error(error);
      }
    },
    setSpecies(value) {
      try {
        if (typeof value === 'string') {
          _species = value;
        } else {
          throw new Error('Value must be a string');
        }
      } catch (error) {
        console.error(error);
      }
    },
  };
}

module.exports = { plantTree };
