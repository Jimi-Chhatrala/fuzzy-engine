//
// www.youtube.com/@BinaryMinutes
//

// Freese object modification

const person = { name: 'Alice' };

Object.freeze(person);

person.name = 'Bob';

console.log(person.name);
