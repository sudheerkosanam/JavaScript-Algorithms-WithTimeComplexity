// Using Dynamic Programming
// Solving the recursive fibonacci function 
function fib(n,memo) {
    let result;
    if (memo[n]){
        return memo[n];
    }
    if (n === 1 || n === 0){
        result = 1;
    } else {
        result = fib(n - 1, memo) + fib(n - 2, memo);
    }
    memo[n] = result;
    return result;
}

console.log(fib(5, {}));
console.log(fib(6, {}));
// so the time complexity is 2n => O(n)
// Linear Time Complexity 



















