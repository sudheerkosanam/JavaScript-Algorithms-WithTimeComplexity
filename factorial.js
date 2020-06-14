// factorial in recursion method
function fact(number){ //1
    if (number === 1){
        return 1;      // 1
    }
    return number * fact(number-1); //1
}
//In every function call => O(1)
//T = n * O(1) => O(n)

console.log(fact(3));
console.log(fact(4));
console.log(fact(5));