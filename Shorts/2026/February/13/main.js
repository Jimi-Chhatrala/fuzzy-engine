//
// www.youtube.com/@BinaryMinutes
//

// Filter out available items from products
const products = [
  { id: 1, name: 'Laptop', price: 1200, inStock: true },
  { id: 2, name: 'Phone', price: 800, inStock: false },
  { id: 3, name: 'Tablet', price: 600, inStock: true },
];

// Get only in-stock products
const availableProducts = products.filter((product) => product.inStock);

console.log('Available Products:', availableProducts);
