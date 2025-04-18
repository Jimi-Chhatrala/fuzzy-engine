//
// www.youtube.com/@BinaryMinutes
//

const registeredEmails = ['alice@example.com', 'bob@example.com'];

// Check if new user is already registered
const newEmail = 'bob@example.com';
const isRegistered = registeredEmails.includes(newEmail);

console.log(`Email already registered? ${isRegistered == true ? 'Yes' : 'No'}`);
