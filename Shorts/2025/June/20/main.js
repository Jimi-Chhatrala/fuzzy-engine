//
// www.youtube.com/@BinaryMinutes
//

// Flatten a nested array to infinity level

const fileStructure = [
  'index.html',
  ['src', ['app.js', ['components', ['Navbar.js', 'Footer.js']]]],
  ['assets', ['images', ['logo.png']]],
];

console.log('Infinity level flattened:', fileStructure.flat(Infinity));
