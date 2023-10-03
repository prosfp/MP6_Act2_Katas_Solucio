function plantTree(species, fruit) {
  if (typeof species !== 'string' || typeof fruit !== 'string') {
    return null;
  }

  return {
    species,
    fruit,
    getFruit: () => fruit,
    getSpecies: () => species,
  };
}

module.exports = { plantTree };
