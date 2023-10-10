function plantTree(species, fruit) {
  //comprovem que els paràmetres son strings
  if (typeof species !== 'string' && typeof fruit !== 'string') {
    return null;
  }
  return {
    _species: species,
    _fruit: fruit,
    getFruit() {
      return this._fruit;
    },
    getSpecies() {
      return this._species;
    },
  };
}

module.exports = { plantTree };
