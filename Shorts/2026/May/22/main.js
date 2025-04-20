//
// www.youtube.com/@BinaryMinutes
//

// Check which students are enrolled in both courses.

const courseA = ['John', 'Alice', 'Bob'];
const courseB = ['Alice', 'David', 'Bob'];

const setB = new Set(courseB);
const commonStudents = courseA.filter(student => setB.has(student));

console.log('Common Students:', commonStudents);
