function solution(stringInput) {
  let significantLetter = null;

  for (let char of stringInput) {
    if (stringInput.includes(char.toUpperCase()) && char.toUpperCase() !== char) {
      if (!significantLetter || char.localeCompare(significantLetter) > 0) {
        significantLetter = char;
      }
    }
  }
  return significantLetter ? significantLetter?.toUpperCase() : "NO";
}

module.exports = solution;
