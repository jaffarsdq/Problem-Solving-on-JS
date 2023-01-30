function isPalindrome(n) {
    let str = "" + n;
    let i = 0,j = str.length-1;
    while(i <= j){
        if(str[i] == str[j]){
            i++;
            j--;      
        }else{
            return `${n} is not a palindrome`;
        }
    }
    return `${n} is a palindrome`;
}

console.log(isPalindrome(1421));