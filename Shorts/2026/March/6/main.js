//
// www.youtube.com/@BinaryMinutes
//

// Array of products
const cart = [
  { productId: 101, name: 'Laptop' },
  { productId: 102, name: 'Headphones' },
  { productId: 101, name: 'Laptop' }, // Duplicate
  { productId: 103, name: 'Mouse' },
  { productId: 102, name: 'Headphones' }, // Duplicate
];

const seen = new Set();
const uniqueProducts = [];

for (const item of cart) {
  // Filter Unique Products by Id
  if (!seen.has(item.productId)) {
    seen.add(item.productId);
    uniqueProducts.push(item);
  }
}

console.log('Unique products:', uniqueProducts);
