/**
 * Insert backwards?
 * Determine an insertion point m + n - 1
 * loop over n until 0
 * on every merge, decrement the insertion and the array we're moving with (m--, n--)
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let insertion = m + n - 1;
  m--;
  n--;
  while (n >= 0) {
    nums1[insertion--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
  }
};
