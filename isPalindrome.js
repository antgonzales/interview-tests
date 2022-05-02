var expect = require("chai").expect;

// Start here

// Create a function that checks for a string to be a palindrome.
expect(isPalindrome("level")).to.be.true;
expect(isPalindrome("hannah")).to.be.true;

// Check that characters in a long string are a palindrome.
// We want to ignore spaces, capitalization, and punctuation.
const testSentence = "Mother Eve's noose we soon sever, eh, Tom?";
expect(isPalindrome(testSentence)).to.be.true;

// Update all strings to have the isPalindrome method.
expect("level".isPalindrome()).to.be.true;

console.log("Tests passed.");
