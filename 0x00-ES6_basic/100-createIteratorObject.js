export default function createIteratorObject(report) {
  const employees = [];
  for (const [, value] of Object.entries(report.allEmployees)) {
    let i = 0;
    while (i < value.length) {
      employees.push(value[i]);
      i += 1;
    }
  }

  return employees;
}
