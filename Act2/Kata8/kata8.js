String.prototype.presentTree = function presentTree(fruit) {
  if (!fruit || typeof fruit !== 'string') {
    console.log(`Este árbol es un ${this}`);
  } else {
    console.log(`Este árbol es un ${this} y da ${fruit}`);
  }
};

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
      if (typeof value === 'string') {
        _fruit = value;
      }
    },
    setSpecies(value) {
      if (typeof value === 'string') {
        _species = value;
      }
    },
  };
}

module.exports = { plantTree };
