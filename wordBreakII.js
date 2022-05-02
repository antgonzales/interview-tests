var expect = require("chai").expect;

/**
 * Given a string s and a dictionary of strings wordDict, 
 * add spaces in s to construct a sentence where each word is a valid dictionary word. 
 * Return all such possible sentences in any order.
 */

expect(wordBreak("catsanddog", ["cat","cats","and","sand","dog"]))
  .to.deep.have.members(["cats and dog","cat sand dog"])

expect(
  wordBreak("pineapplepenapple", ["apple","pen","applepen","pine","pineapple"])
).to.deep.have.members(
  [
    "pine apple pen apple",
    "pineapple pen apple",
    "pine applepen apple"
  ]
)
expect(wordBreak("catsandog", ["cats","dog","sand","and","cat"]))
  .to.deep.have.members(
    []
  )
