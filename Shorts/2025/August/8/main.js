//
// www.youtube.com/@BinaryMinutes
//

// Count occurrences of a character in a string
const countOccurrences = 
  (s, char) => s.split(char).length - 1;

console.log('Total occurances:', 
  countOccurrences(
    'JavaScript is sooO easy.', 'o'
  ));
