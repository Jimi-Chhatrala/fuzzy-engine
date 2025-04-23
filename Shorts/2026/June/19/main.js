//
// www.youtube.com/@BinaryMinutes
//

// A shopping cart function needs to accept any number of product prices and calculate the total.

const calculateTotal = (...prices) =>  prices.reduce((total, price) => total + price, 0);

console.log('10, 20, 30 =',calculateTotal(10, 20, 30));
console.log('100, 200 = ', calculateTotal(100, 200));
