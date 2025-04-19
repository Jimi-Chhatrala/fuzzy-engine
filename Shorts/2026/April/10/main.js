//
// www.youtube.com/@BinaryMinutes
//

const sales = {
  January: 1200,
  February: 1500,
  March: 1700,
};

// Get months and values separately
const months = Object.keys(sales);

// Calculate total sales
const totalRevenue = Object.values(sales).reduce((sum, value) => sum + value, 0);

console.log('Months:', months);
console.log('Total Revenue:', totalRevenue);
