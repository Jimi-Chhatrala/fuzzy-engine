//
// www.youtube.com/@BinaryMinutes
//

// Flattening array to level 2

const comments = [
  ['Great article!', ['Thanks!', 'Glad you liked it!']],
  ['Need more details.', ['Which part?', ['The conclusion.']]],
  ['I disagree.'],
];

console.log('Level 2 flattened:', comments.flat(2));