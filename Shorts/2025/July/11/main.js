//
// www.youtube.com/@BinaryMinutes
//

// Carry over object's properties
const senior = {
  name: 'John Doe',
  designation: 'Senior Software Engineer',
  salary: 50000,
};

// After a long wait 🎯
const techLead = {
  ...senior,
  designation: 'Tech Lead',
  salary: 100000,
};

console.log('Long wait:', techLead);
