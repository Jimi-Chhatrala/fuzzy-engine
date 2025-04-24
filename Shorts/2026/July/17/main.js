//
// www.youtube.com/@BinaryMinutes
//

// A user shouldn’t be able to add the same task twice.

const tasks = new Set();

function addTask(task) {
  if (tasks.has(task)) {
    console.log('Task already exists!');
  } else {
    tasks.add(task);
    console.log(`Added: ${task}`);
  }
}

addTask('Buy groceries'); // Added: Buy groceries
addTask('Pay bills'); // Added: Pay bills
addTask('Buy groceries'); // Task already exists!
