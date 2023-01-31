// Input: nums = [1,1,0,1,1,1]
// Output: 3

let nums = [1,1,0,1,1,1,1,1,0,1,1,1];

function ConsecutiveOnes(nums) {
    let currentOnes = 0;
    let finalOnes = 0;

    for(let i=0; i<nums.length; i++){
        if(nums[i] == 1){
            currentOnes += 1;
            finalOnes = Math.max(finalOnes,currentOnes);
        }else{
            currentOnes = 0;
        }
    }
    return finalOnes;
}

console.log(ConsecutiveOnes(nums));