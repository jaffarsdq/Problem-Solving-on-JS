function pattern(n) {
    //Upper
    for(let i=1 ; i<=n ; i++){
        let str = "";
        //Spaces
        let spaces = n-i;
        for(let j=1 ; j<=spaces ; j++){
            str += " ";
        }
            //Stars
          let stars = 2*i-1;
          for(let j=1 ; j<=stars ; j++){
              str += "*";
          }

        console.log(str);
    }
        //Lower
        for(let i=1 ; i<=n-1 ; i++){
            let str = "";
            //Spaces
            let spaces = i;
            for(let j=1 ; j<=spaces ; j++){
                str += " ";
            }
                //Stars
              let stars = 2*(n-i)-1;
              for(let j=1 ; j<=stars ; j++){
                  str += "*";
              }
              
            console.log(str);
        }
}

pattern(5);