function leap(year){
    if(year % 4 == 0){
        if(year % 100 == 0){
            if(year % 400 == 0){
                return `${year} is leap year`;
            }else{
                return `${year} is Not a leap year`;
            }
        }else{
            return `${year} is  a leap year`;
        }
    }else{
        return `${year} is Not a leap year`;
    }
};

let year;
console.log(leap(2100));