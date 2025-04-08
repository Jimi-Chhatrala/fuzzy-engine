//
// www.youtube.com/@BinaryMinutes
//

// Swapping Keys and Values in an Object
const roles = {
  1: 'Admin',
  2: 'Editor',
  3: 'Viewer',
};

const swappedRoles = 
  Object.fromEntries(
    Object.entries(roles)
    .map(([id, role]) => [role, id])
  );

console.log('Swapped roles:', swappedRoles);
