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
          //Stars2
          let stars2 = i-1;
          for(let j=1 ; j<=stars2 ; j++){
              str += "*";
          }

        console.log(str);
    }
}

pattern(4);