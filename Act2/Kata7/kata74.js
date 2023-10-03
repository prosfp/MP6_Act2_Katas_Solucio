function plantTree(species, fruit) {
  if (typeof species !== 'string' || typeof fruit !== 'string') {
    return null;
  }

  /**
   * Estas variables son inaccesibles desde fuera.
   * Su valor solamente puede ser mutado desde el setter.
   *
   * Es comun aplicar el prefijo _ a las variables "privadas".
   */
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
