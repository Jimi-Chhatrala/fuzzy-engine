//
// www.youtube.com/@BinaryMinutes
//

// Check if a string contains only digits

const zipCode = '12345';
const isValid = /^\d+$/.test(zipCode);

if (isValid) {
  console.log('✅ ZIP code is valid!');
} else {
  console.log('❌ ZIP code must contain only numbers.');
}
