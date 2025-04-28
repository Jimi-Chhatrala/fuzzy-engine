//
// www.youtube.com/@BinaryMinutes
//

// Check if a string is a palindrome

const isPalindrome = 
  (string) => 
    string === string.split('')
                      .reverse()
                       .join('');

console.log('Is Palindrome:',
              isPalindrome('racecar'));
console.log('Is Palindrome:',
              isPalindrome('hello'));
