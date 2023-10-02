function removeFirstAndLast(string) {
  let textFinal = string;

  if (string.length > 2) {
    textFinal = string.slice(1, -1);
  }

  return textFinal;
}

module.exports = removeFirstAndLast;
