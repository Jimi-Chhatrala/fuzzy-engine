//
// www.youtube.com/@BinaryMinutes
//

const user = {
  name: 'Alice',
  email: 'alice@example.com',
};

// Check if 'email' property exists
if ('email' in user) {
  console.log('Email exists:', user.email);
} else {
  console.log('No email found.');
}
