function pattern(n) {
    for(let i=1 ; i<=n ; i++){
        let str = "";
        for(let j=1 ; j<=n ; j++){
            str += "*";
        }
        console.log(str);
    }
}

pattern(4);