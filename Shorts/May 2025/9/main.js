//
// www.youtube.com/@BinaryMinutes
//

// Check if a number is prime

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++)
    if (num % i === 0) return false;
  return true;
}

console.log('Is Prime:', isPrime(7));
console.log('Is Prime:', isPrime(10));
