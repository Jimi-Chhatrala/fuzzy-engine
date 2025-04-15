//
// www.youtube.com/@BinaryMinutes
//

// Capitalize first letter of each word

const titleCase = (str) => str.replace(/\b\w/g, (char) => char.toUpperCase());

console.log('Capitalized version:', titleCase('my first blog post'));
