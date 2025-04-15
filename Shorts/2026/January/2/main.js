//
// www.youtube.com/@BinaryMinutes
//

// Find duplicate items in an array
const bucket = ['Apple', 'Banana', 'Milk', 'Bread', 'Banana', 'Butter Milk', 'Cheese', 'Bread'];

const duplicates = bucket.filter((item, index, bucket) => {
  return bucket.indexOf(item) !== index
})

console.log('Duplicate items in bucket:', duplicates);
