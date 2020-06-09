function isPowerOfTwo(number) {
 if (number < 1){ // 1
     return false;
 }
 let divideNumber = number; //1
 while(divideNumber !== 1){ //n
     if(divideNumber % 2 !== 0){ //n
         return false; //1
     }
     divideNumber = divideNumber / 2; //n
 } 
 return true; //n
}
// so the time complexity is 
// best case : number => 13 => O(1);
//Average Case : O(log n)
//Worst case : 1,125,899,906,842,624 = 2^50 => O(log n)
// The other way of writing this example
//  BY USING THE BINARY NOTATIONS
// BITWISE OPERATORS
function isPowerOfTwoo(number){
    if (number < 1){ // 1
        return false;
    }
    return (number & (number - 1)) === 0; // O(1)
}
console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(9));
console.log(isPowerOfTwo(10));