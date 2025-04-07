//
// www.youtube.com/@BinaryMinutes
//

// Merge and override object's properties
const junior = {
  name: 'John Doe',
  salary: 25000,
  designation: 'Junior Software Engineer',
};

// After promotion 😊
const senior = {
  salary: 50000,
  designation: 'Senior Software Engineer',
};

const upraisalProcess = { ...junior, ...senior };
console.log('Finally:', upraisalProcess);
