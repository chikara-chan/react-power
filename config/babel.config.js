/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var map = {}

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > target) {
      continue
    }

    if (map[target - nums[i]] != undefined) {
      return [map[target - nums[i]], i]
    }
    map[nums[i]] = i
  }
}

console.log(twoSum([0, 4, 3, 0], 0))
