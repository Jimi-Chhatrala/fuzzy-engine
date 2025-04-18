//
// www.youtube.com/@BinaryMinutes
//

const inventory = [
  { product: 'TV', inStock: false },
  { product: 'Laptop', inStock: true },
  { product: 'Phone', inStock: false },
];

// Check if any item is available
const hasStock = inventory.some((item) => item.inStock);

const isAvailable = hasStock == true ? 'Yes' : 'No';

console.log(`Any product available? ${isAvailable}`);
