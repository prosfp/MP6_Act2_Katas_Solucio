const tree = {
  // Key(ex: species) - Value ("appleTree") pair
  species: 'appleTree',
  fruit: 'apple',
};

function getFruit(tree) {
  // if (tree.hasOwnProperty('fruit')) {
  //   return tree.fruit;
  // }
  // return 'No fruit';
  return tree.hasOwnProperty('fruit') ? tree.fruit : 'No fruit';
}

module.exports = {
  tree,
  getFruit,
};
