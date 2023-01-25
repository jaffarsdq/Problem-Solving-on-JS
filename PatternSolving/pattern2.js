function pattern2(n){
    for(let i=1 ; i<=n ; i++){
        let str = "";
        for(let j=1; j<=i ; i++){
            str += "*";
        }
        console.log(str);
    }
}

pattern2(4);