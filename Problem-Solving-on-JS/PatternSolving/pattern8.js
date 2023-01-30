function pattern (n){
    for(let i=1 ; i<=n ; i++){
        let str = "";
        //stars
        let stars = n-i;
        for(let j=1 ; j<=stars ; j++){
            str += "  ";
        }
        //NumbersMid
        let count = 1;
        for(let j=1 ; j<=i ; j++){
            str += count + " ";
            count++;
        }
        count = i-1;
        for(let j=1 ; j<=i-1 ; j++){
            str += count + " ";
            count--;
        }
        //NumbersRight
        console.log(str);
    }
}
pattern(4);