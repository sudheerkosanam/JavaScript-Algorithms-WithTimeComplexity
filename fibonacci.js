// Fibonacci Sequence
function fib(n){
  const numbers = [1,1]; // 1
  for (let i = 2 ; i < n +1 ; i++){ // 1
    // console.log("Running")    // n-1
    numbers.push(numbers[i-2] + numbers[i-1]); // n-1
  }
  return numbers[n]; //1
}
// Time Complexity 
// T = 1 + 1 + 1 + n-1
//console.log is uncommented it also runs n-1 times then,
// T = 1 + 1 + 1 + 2*(n-1) = 3 + 2 * (n-1) = 3 + 2n-2 = 1+2n = 2n = n
// The Big O
// => O(n) - Linear Time Complexity
console.log(fib(4));
