function pattern(n) {
    //Upper left
    for(let i=1 ; i<=(n-1)/2 ; i++){
        let str = "";
        //starsL
        for(let j=1 ; j<=i ; j++){
            str += "*";
        }
        //spaces
        let spaces = n-(2*i);
        for(let k=1 ; k<=spaces ; k++){
            str += " ";
        }
        //starsR
        let stars = i;
        for(let l=0 ; l<stars ; l++){
            str += "*";
        }
        console.log(str);
    }
    //Middle 
    for(let i=1 ; i<=1; i++){
        let str = "";
        for(let j=1 ; j<=n ; j++){
            str += "*";
        }
        console.log(str);
    }
    //DownL
    for(let i=1 ; i<=(n-1)/2 ; i++){
        let str = "";
        //starsL
        let stars = (n-1)/2-i+1;
        for(let j=1 ; j<=stars ; j++){
            str += "*";
        }
        let spaces = 2*i-1;
        for(let j=1 ; j<=spaces ; j++){
            str += " " ;
        }
        let starsR = (n-1)/2-i+1;
        for(let j=1 ; j<=starsR ; j++){
            str += "*";
        }
        console.log(str);
            
    }
}    
pattern(7);