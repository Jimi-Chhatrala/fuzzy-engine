//
// www.youtube.com/@BinaryMinutes
//

// Remove falsy values (0, "", null, undefined, NaN, false)
const arr = [0, 1, false, 2, '', 3, null, undefined, NaN];

console.log(
  'Truthy values:', arr.filter(Boolean));
