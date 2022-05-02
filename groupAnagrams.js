var expect = require("chai").expect;

// Start here

/**
 * Given an array of strings, group anagrams together.
 * Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
 * Output:
 *  [
      ["ate","eat","tea"],
      ["nat","tan"],
      ["bat"]
    ]
*/

expect(
  groupAnagrams(["abut", "care", "tuba", "race", "aauu"])
).to.deep.have.members([["abut", "tuba"], ["care", "race"], ["aauu"]]);

// Check that strings with weird characters are grouped appropriately.
expect(
  groupAnagrams([
    "The Morse Code.",
    "moon starer",
    "Here, come dots.",
    "aStronomer",
    "meow",
  ])
).to.deep.have.members([
  ["The Morse Code.", "Here, come dots."],
  ["moon starer", "aStronomer"],
  ["meow"],
]);

// Update all arrays to have the groupAnagrams methd.

expect(
  ["abut", "care", "tuba", "race", "aauu"].groupAnagrams()
).to.deep.have.members([["abut", "tuba"], ["care", "race"], ["aauu"]]);

console.log("Tests passed.");
