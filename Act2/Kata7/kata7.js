function plantTree(species, fruit) {
  //comprovem que els paràmetres son strings
  if (typeof species !== 'string' && typeof fruit !== 'string') {
    return null;
  }
  return {
    species: species,
    fruit: fruit,
  };
}

module.exports = { plantTree };
