let str = "jaffar";
let freqMap = {};
function freq(str) {
    for(let char of str){
        if(freqMap[char]){
            freqMap[char] += 1;
        }else{
            freqMap[char] = 1;
        }
    }
    return freqMap;
}

console.log(freq(str));