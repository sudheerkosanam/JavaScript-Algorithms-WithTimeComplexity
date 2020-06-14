function fib(n){  // n = 3
    // [1, 1, 2, 3, 5, 8]
   if(n === 1 || n === 0){
       return 1;
   }
   return fib(n -1) + fib(n -2);
}

//  loop-Based sol : O(n) => if we implement using Loops
// O(n^2);
//But we trigger multiple functio calls => n function calls
//fib(4); => 09 executions
//fib(5); => 15 executions
//fib(6); => 25 executions
// we have Exponential Time Complexity : O(2^n) 