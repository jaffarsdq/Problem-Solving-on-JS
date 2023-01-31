/*
1 2 3 4 5 6 7
 2 3 4 5 6 7
  3 4 5 6 7
   4 5 6 7
    5 6 7
     6 7
      7
     6 7
    5 6 7
   4 5 6 7
  3 4 5 6 7
 2 3 4 5 6 7
1 2 3 4 5 6 7

Input: n = 7 */

function pattern (n) {
    //Upper part
    for(let i=1; i<=n; i++){
        let str = "";
        //spaces
        let spaces = i-1;
        for(let j=1; j<=spaces; j++){
            str += " ";
        }
        //numbers
        let numbers = n-i+1;
        let count = i;
        for(let j=1; j<=numbers; j++){
            str += count + " ";
            count++;
        }
        console.log(str);
    }
    //Lower part
    for(let i=1; i<=n-1; i++){
        let str = "";
        //spaces
        let spaces = n-i-1;
        for(let j=1; j<=spaces; j++){
            str += " ";
        }
        //numbers
        let numbers = i+1;
        let count = n-i;
        for(let j=1; j<=numbers; j++){
            str += count + " ";
            count++;
        }
        console.log(str);
    }

}
pattern (5);