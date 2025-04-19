//
// www.youtube.com/@BinaryMinutes
//

const users = {
  alice: { age: 25, active: true },
  bob: { age: 30, active: false },
  charlie: { age: 28, active: true },
};

// Convert object to array and filter active users
const activeUsers = Object.entries(users)
  .filter(([_, user]) => user.active)
  .map(([name, _]) => name);

console.log('Active Users:', activeUsers);
