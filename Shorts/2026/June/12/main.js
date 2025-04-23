//
// www.youtube.com/@BinaryMinutes
//

// Count occurrences of elements in an array
const items = ['apple', 'banana', 'apple', 'orange', 'banana', 'banana'];

const itemWithCount = items.reduce((acc, item) => ((acc[item] = (acc[item] || 0) + 1), acc), {});

console.log('Items with count:', itemWithCount);
