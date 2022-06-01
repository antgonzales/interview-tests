/**
 * Left to right bit manipulation
 * Get length of binaries + carry + result
 * Create a while loop to step through every binary character
 * Sum the '1'/'0' values
 * add to carry if the number is above 1
 * Append to the result by dividing remainder by 2
 * Return result
 *
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let i = a.length - 1,
    j = b.length - 1,
    carry = 0,
    res = "";

  while (i >= 0 || j >= 0 || carry) {
    const num1 = Number(a[i]) || 0;
    const num2 = Number(b[j]) || 0;

    const sum = num1 + num2 + carry;

    carry = sum > 1 ? 1 : 0;

    res = (sum % 2) + res;
    i--;
    j--;
  }
  return res;
};
