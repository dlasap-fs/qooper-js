/**
 * Finds the alphabetically largest letter that occurs in both lowercase and uppercase of a given string.
 * If there are none, returns "NO" string.
 *
 * @param {string} stringInput The input string.
 * @returns {string} The largest Alphabetical letter that is in both lowercase and uppercase, or "NO" if it has none.
 */

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
