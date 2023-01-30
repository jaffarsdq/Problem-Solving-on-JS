function pattern (n){
    //Upper
    for(let i=1 ; i<=((n-1)/2)+1 ; i++){
        let str = "";
        //stars
        let stars = ((n-1)/2)-i+2;
        for(let j=1 ; j<=stars ; j++){
            str += "*";
        }
        //Spaces
        let spaces = 2*i-1;
        for(let j=1 ; j<=spaces ; j++){
            str += " ";
        }
        //stars
        stars = ((n-1)/2)-i+2;
        for(let j=1 ; j<=stars ; j++){
            str += "*";
        }
        console.log(str);
    }
    //Down
    for(let i=1 ; i<=((n-1)/2)+1 ; i++){
        let str = "";
        //stars
        let stars = i;
        for(let j=1 ; j<=stars ; j++){
            str += "*";
        }
        //Spaces
        let spaces = (n+2)-(i*2);
        for(let j=1 ; j<=spaces ; j++){
            str += " ";
        }
        //stars
        stars = i;
        for(let j=1 ; j<=stars ; j++){
            str += "*";
        }
        console.log(str);
    }

}
pattern(11);