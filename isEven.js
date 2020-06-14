function leastNumber(numbers){
    let smallNumber = numbers[0];   // 1
    for(let i =1;i<numbers.length;i++){ //1
       
        if (smallNumber > numbers[i]){ //n
            smallNumber = numbers[i]; // depends on  the case of the array
        }
    }
    return smallNumber; //1
} 

//so the big o notation 1 + 1 + n + 1 + 1 = 5 + n => o(n) = linear Time complexity  

console.log(leastNumber([4,5,6,45,67,12,45,7,89,2,9]));
console.log(leastNumber([4,5,3,45,67,8,9]));
console.log(leastNumber([67,12,45,7,89,8,9]));

function isEven(n) { //1
    // can be written as
    // return n  % 2 === 0 ;
    if(n % 2 === 0){ //1
        return true;  //1
    }
    return false;    //1
    // its constant time complexity
}
console.log(isEven(41));
console.log(isEven(42));
console.log(isEven(43));

