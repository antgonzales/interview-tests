/**
 * Create arrays of all possible values and letters, descending
 * Create a loop while the number isn't 0
 * Create a for loop descending the array of number values
 * If greater than the current number, continue
 * else subtract the value from the number and add letters to the result
 * return results
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const letters = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  let res = "";
  for (let i = 0; i < values.length; i++) {
    while (num >= values[i]) {
      num -= values[i];
      res += letters[i];
    }
  }
  return res;
};
