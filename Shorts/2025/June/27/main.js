//
// www.youtube.com/@BinaryMinutes
//

// Custom fn() for array flattening version

const flattenDepth = (array, depth = 1) =>
  depth > 0
    ? array.reduce(
        (acc, val) => acc.concat(Array.isArray(val) ? flattenDepth(val, depth - 1) : val),
        []
      )
    : array.slice();

const nested = [1, [2, [3, [4]]]];
console.log(flattenDepth(nested, 1));
console.log(flattenDepth(nested, 2));
console.log(flattenDepth(nested, Infinity));
