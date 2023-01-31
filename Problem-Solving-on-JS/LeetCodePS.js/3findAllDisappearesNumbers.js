// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]

let nums = [4,3,2,7,8,2,10,3,1];

function DisappearedNumbers (nums){
    let n = nums.length;
    for(let i=0; i<n; i++){
        let x = Math.abs(nums[i]);
        let idx = x-1;
        if(nums[idx] > 0){
            nums[idx] *= -1;
        }
    }
    let result = [];
    for(let i=0; i<n; i++){
        if(nums[i] > 0) result.push(i+1);
    }
    return result;

}
console.log(DisappearedNumbers(nums));
