// Extracting name and email while keeping all other details in a separate object.

const user = {
  name: 'Alice',
  email: 'alice@example.com',
  age: 25,
  canBeFoundOn: 'Earth',
};

const { name, email, ...otherDetails } = user;

console.log('Name:', name);
console.log('Email:', email);
console.log('Other Details:', otherDetails);
