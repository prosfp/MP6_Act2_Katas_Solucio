const tree = {
  // Key(ex: species) - Value ("appleTree") pair
  species: 'appleTree',
  fruit: 'apple',
  getFruit() {
    return this.fruit || 'No fruit';
  },
};

module.exports = {
  tree,
};
