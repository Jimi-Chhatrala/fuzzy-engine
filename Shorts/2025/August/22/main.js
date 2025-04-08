//
// www.youtube.com/@BinaryMinutes
//

// Group array elements by a property
const users = [
  { name: 'Alice', role: 'admin' },
  { name: 'Bob', role: 'user' },
  { name: 'Charlie', role: 'admin' },
];

const grouped = users.reduce((acc, user) => {
  acc[user.role] = acc[user.role] || [];
  acc[user.role].push(user);
  return acc;
}, {});

console.log('Group by roles:', grouped);
