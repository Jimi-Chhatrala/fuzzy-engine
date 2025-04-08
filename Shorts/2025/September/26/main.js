//
// www.youtube.com/@BinaryMinutes
//

// Find indexes of elements present in arr1,
// that are also present in arr2.

const arr1 = ['123', '456', '789'];
const arr2 = ['456', '789'];

const matchingIndexes =
  arr1.map((element, index) => {
    // Check if the current element exists in arr2
    if (arr2.includes(element)) {
      return index;
    }
    return -1; // Return -1 if not found
  })
  .filter((index) => index !== -1); // Remove all -1 values

console.log(
  'Matching indexes:',
    matchingIndexes
);