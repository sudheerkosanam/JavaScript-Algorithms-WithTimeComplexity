function fact(number) {
   let factorial= 1;
   // for (let i = 2 ;i <= number ; i++)
    for (let i = number ; i >= 1 ; i--) {
        factorial = factorial * i;
      // console.log(i);
    }
    return factorial;
}
// Time Complexity is the O(n) => Linear Time Complexity
console.log(fact(3));
console.log(fact(5));
