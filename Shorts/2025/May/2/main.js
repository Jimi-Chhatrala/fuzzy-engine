//
// www.youtube.com/@BinaryMinutes
//

// Check if an object is empty (no keys)

const isEmptyObj = 
    (object) => 
      Object.keys(object).length === 0;

console.log('Is empty object:', 
              isEmptyObj({}));
console.log('Is empty object:', 
              isEmptyObj({ key: 'value' }));
