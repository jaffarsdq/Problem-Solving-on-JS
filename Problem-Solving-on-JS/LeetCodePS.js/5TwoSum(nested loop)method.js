// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

let nums = [2,7,11,15], target = 9;
console.log(twoSum(nums,target));

function twoSum(nums,target) {
    for(let i=0; i<nums.length; i++){
        for(let j= i+1; j<nums.length; j++){
            if(nums[i] + nums[j] == target) return [i,j];
        }
    }
}