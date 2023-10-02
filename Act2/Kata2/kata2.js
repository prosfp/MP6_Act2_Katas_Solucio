function repeatString(string, numberOfTimes) {
  let result = '';

  for (let i = 0; i < numberOfTimes; i++) {
    result += string;
  }

  return result;
}

module.exports = repeatString;
