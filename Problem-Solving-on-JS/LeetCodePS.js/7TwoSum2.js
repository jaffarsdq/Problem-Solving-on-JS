/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let start = 0;
    let end = numbers.length - 1;
    while ( start < end ){
        let add = numbers[start] + numbers[end] ;
        if( add == target ){
             return [start+1,end+1];
        }else if( add > target ){
            end --;
        }else{
            start ++;
        }
    }
};