//
// www.youtube.com/@BinaryMinutes
//

const product = {
  name: 'Laptop',
  price: 1200,
  stock: 5,
};

// Loop through properties
for (let key in product) {
  console.log(`${key}: ${product[key]}`);
}
