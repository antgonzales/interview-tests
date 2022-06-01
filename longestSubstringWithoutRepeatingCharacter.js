/**
 * Sliding window optimized
 * - Create a map, starting index, and answer
 * - Loop through the letters
 * - if seen, set the start to either current letter + 1 or start
 * - Add index to the map by letter
 * - Set the answer to either index - start + 1 (distance) or start
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let start = 0;
  let answer = 0;
  const seen = new Map();

  for (let i = 0; i < s.length; i++) {
    // Place the start of the index on the next seen letter
    if (seen.has(s[i])) {
      start = Math.max(seen.get(s[i]) + 1, start);
    }
    seen.set(s[i], i);
    answer = Math.max(i - start + 1, answer);
  }
  return answer;
};
