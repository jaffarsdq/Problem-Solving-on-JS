function pattern(n) {
    for(let i=1 ; i<=n ; i++){
        let str = "";
        //Spaces
        let spaces = n-i;
        for(let j=1 ; j<=spaces ; j++){
            str += " ";
        }
        //Stars
        let stars = i;
        for(let j=1 ; j<=stars ; j++){
            str += "*";
        }

        console.log(str);
    }
}

pattern(4);