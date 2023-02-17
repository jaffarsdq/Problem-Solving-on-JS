function swap (arr, i, j) {
    let temp = arr [i];
    arr [i] = arr[j];
    arr[j] = temp;
}

function partition (arr, pivotIndex, L, R) {
    let pivotElement = arr[pivotIndex];
    swap (arr, pivotIndex, R);
    let j = L, i = L-1;
    while (j <= R-1) {
        if (arr[j] <= pivotElement) {
            i++;
            swap (arr, i, j);
        }
        j++;
    } 
    swap (arr, i+1, R);
    return i+1;
}

function RandomPivot (l, r) {
    return Math.floor(Math.random()*(r - l) + l);
}

function f (arr, l, r) {
    if (l >= r) return ;
    let pivotIndex = RandomPivot(l, r);
    let m = partition(arr, pivotIndex, l, r);
    f(arr, l, m-1);
    f(arr, m+1, r);
}

function quicksort (arr) {
    return f(arr, 0, arr.length-1);
}


let arr = [5,4,3,2,1, 8,9 , 0, -2, 3, 5];
quicksort(arr);
console.log(arr);