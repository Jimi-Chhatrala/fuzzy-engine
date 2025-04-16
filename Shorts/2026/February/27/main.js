//
// www.youtube.com/@BinaryMinutes
//

const users = [
  { name: 'Alice', verified: true },
  { name: 'Bob', verified: true },
  { name: 'Charlie', verified: false },
];

// Check if all users are verified
const allVerified = users.every((user) => user.verified);

console.log(`Are all users verified? ${allVerified == false ? 'No' : 'Yes'}`);
