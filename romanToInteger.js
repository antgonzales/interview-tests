/**
 * - Make a hash map of the numerals
 * - Loop on the string
 * - If current is less than next (IV) (IX), subtract
 * - Else, add
 * - Return answer
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    if (symbols[s[i]] < symbols[s[i + 1]]) {
      answer -= symbols[s[i]];
    } else {
      answer += symbols[s[i]];
    }
  }

  return answer;
};
