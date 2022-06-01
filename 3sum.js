/**
 * Pivot + 2 pointers?
 * Sort the numbers
 * Create a hash to dedupe
 * Set pivot, pivot + 1, and end pointers
 * Loop over the entire array of strings, updating pivot
 * [-4, -1, -1, 0, 1, 2]
 * [pivot, p1, _, _, _, p2]
 * If sum of pivot + p1 + p2 === 0, add to hash by key/value array
 * If sum < 0, increment p1
 * If sum > 0, decrement p2
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result = {};
    const _nums = nums.slice().sort((a, b) => a - b);
    
    for (let i = 0; i < _nums.length; i++) {
        let p1 = i + 1, p2 = _nums.length - 1;
        while (p1 < p2) {
            const sum = _nums[i] + _nums[p1] + _nums[p2];
            
            const key = `${_nums[i]}${_nums[p1]}${_numsp2]}`
    
            if (sum === 0) {
                if (!result[key]) {
                    result[key] = [_nums[i], _nums[p1], _nums[p2]]
                }
            }
            if (sum < 0) {
                p1++
            } else {
                p2--
            }
            
        }
    }
    return [...Object.values(result)]
};
