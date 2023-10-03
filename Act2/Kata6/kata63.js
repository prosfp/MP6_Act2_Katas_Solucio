const { moduleExpression } = require('@babel/types');

const tree = {
  species: 'appleTree',
  fruit: 'apple',
  getFruit() {
    return this.fruit || 'No fruit';
  },
};

module.exports = { tree };
