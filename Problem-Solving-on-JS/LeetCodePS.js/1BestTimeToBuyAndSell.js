let prices = [7,1,5,3,6,4];

function f(arr) {
    let minPrice = arr[0];
    let profit = 0;
    for(let i = 1; i < arr.length ; i++){
        if(arr[i] > minPrice){
            profit = Math.max(profit,arr[i] - minPrice);
        }else if(arr[i] < minPrice){
            minPrice = arr[i];
        }
    }
    return profit;
}
console.log(f(prices));