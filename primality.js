// Primality Test
// checking wheather input number is prime or not
function isPrime(number){
    for(let i = 2; i < Math.sqrt(number) ; i ++){
        if (number % i === 0){
            return false;
        }
    }
    return true;
}

console.log(isPrime(5));
console.log(isPrime(9));
console.log(isPrime(1));
console.log(isPrime(34567467777899877899866));