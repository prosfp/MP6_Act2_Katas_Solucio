function plantTree(species, fruit) {
  if (typeof species !== 'string' || typeof fruit !== 'string') {
    return null;
  }

  return {
    species,
    fruit,
    getFruit: () => fruit,
  };
}

module.exports = { plantTree };
