let array = ["abc", "hello", "c", "d", "c", "abc", "d"];
let obj = {};
for (let map of array){
    if(!obj[map]){
        obj[map] = true;
    }
}

for(let unique in obj){
    console.log(unique);
}