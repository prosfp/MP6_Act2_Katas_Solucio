function plantTree(species, fruit) {
  if (typeof species !== 'string' || typeof fruit !== 'string') {
    return null;
  }

  return {
    _fruit: fruit,
    _species: species,
    get Fruit() {
      return fruit;
    },
    get Species() {
      return species;
    },
  };
}

// const poma = plantTree('pommer', 'poma');
// console.log(poma.Fruit);

module.exports = { plantTree };
