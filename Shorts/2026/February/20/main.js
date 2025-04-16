//
// www.youtube.com/@BinaryMinutes
//

const users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' },
];

// Find user by email
const userEmail = 'bob@example.com';
const userFound = users.find((user) => user.email === userEmail);

console.log('User Found:', userFound);
