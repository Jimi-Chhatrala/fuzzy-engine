//
// www.youtube.com/@BinaryMinutes
//

// Calculate total stock from an array of items.
const stock = [
  { item: 1, quantity: 50 },
  { item: 2, quantity: 100 },
  { item: 3, quantity: 75 },
];

// Calculate total items
const totalStock = stock.reduce((total, stock) => total + stock.quantity, 0);

console.log(`Total Stock: ${totalStock}`);
