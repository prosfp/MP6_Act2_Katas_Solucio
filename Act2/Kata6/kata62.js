function getFruit(tree) {
  if (tree && tree.hasOwnProperty('fruit')) {
    return tree.fruit;
  }
  return 'No fruit';
}

module.exports = {
  getFruit,
};
