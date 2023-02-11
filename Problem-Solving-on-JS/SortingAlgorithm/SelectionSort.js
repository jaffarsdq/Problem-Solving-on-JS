function min(arr, i) {
    let minInd = i;
    for (let j = i+1; j < arr.length; j++) {
        if(arr[j] < arr[minInd]) {
            minInd = j;
        }
    }
    return minInd;
}

function sort () {
    for (let i = 0; i < arr.length; i++) {
        let minVal = min(arr,i);
        if(i != minVal){
            let temp = arr[i];
            arr[i] = arr[minVal];
            arr[minVal] = temp;
        }
    }
    return arr;
}
let arr = [3,4,2,1,8,6,5];
console.log(sort (arr));
