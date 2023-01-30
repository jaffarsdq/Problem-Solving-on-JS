function seperate (arr) {
    let i = 0 , j = arr.length-1;
    while(i<=j){
        if(arr[i] == 1){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp; 
            j--;
        }else{
            i++;
        }
        
    }
    return arr;
}

let arr = [1,1,1,0,1,1,0,0,0,1];
console.log(seperate(arr));