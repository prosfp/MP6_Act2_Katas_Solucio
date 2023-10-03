function plantTree(species, fruit) {
  if (typeof species !== 'string' || typeof fruit !== 'string') {
    return null;
  }

  return {
    getFruit() {
      return fruit;
    },
    getSpecies() {
      return species;
    },
  };
}

module.exports = { plantTree };
