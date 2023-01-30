function pattern (n){
    for(let i=0 ; i<n ; i++){
        let str = "";
        //stars
        let stars = n-i;
        for(let j=0 ; j<stars ; j++){
            str += "*";
        }
        console.log(str);
    }
}
pattern(5);