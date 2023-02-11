let arr = [3,4,2,1,8,6,5];

function insertion (arr) {
    for (let i=1; i<arr.length; i++) {
        let minVal = arr[i];
        let j = i-1;
        while (j >= 0 && arr[j] > minVal) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = minVal;
    }
    return arr;
}
console.log(insertion (arr));