function bubble (arr) {
    let n = arr.length;
    for (let i=0; i < n-1; i++) {
        let isSwapped = false;
        for (let j=0; j< n-i-1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isSwapped = true;
            }
            console.log(arr);
        }
        if(isSwapped === false){
            return arr;
        }
    }
    return arr;
}
let arr = [3,4,2,1,8,6,5];
console.log(bubble (arr));