function evenOdd(num) {
  return num % 2 === 0 ? 'Parell' : 'Senar';
}

// Option B

function evenOdd2(num) {
  if (num % 2 === 0) {
    return 'Parell';
  }
  return 'Senar';
}

module.exports = evenOdd;
module.exports = evenOdd2;
