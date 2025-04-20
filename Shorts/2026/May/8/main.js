//
// www.youtube.com/@BinaryMinutes
//

// You have employee data,
// and you want to find employees
// who are currently assigned to a project.

const employees = [
  {
    empId: 301,
    work: {
      currentProjectId: 1001,
    },
  },
  {
    empId: 302,
    work: {
      currentProjectId: null,
    },
  },
  {
    empId: 303,
    work: {
      currentProjectId: 1002,
    },
  },
];

const activeEmployees = employees
  .filter((emp) => emp.work.currentProjectId !== null)
  .map((emp) => emp.empId);

console.log('Active Employees:', activeEmployees);
