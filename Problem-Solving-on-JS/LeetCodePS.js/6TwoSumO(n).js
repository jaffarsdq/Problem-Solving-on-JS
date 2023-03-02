/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let i = 0;
    let j = nums.length -1;
    for (let i = 0; i < j+1; i++) {
        nums[i] = [nums[i],i];
    }
    nums.sort((x,y) => x[0] - y[0]);
    console.log (nums);
    while (i < j) {
        if (nums[i][0] + nums[j][0] == target) {
            return [nums[i][1],nums[j][1]];
        }if (nums[i][0] + nums[j][0] > target) {
            j--;
        }else {
            i++;
        }
    }
};