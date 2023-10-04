interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const firstStudent: Student = {
	firstName: "Michael",
	lastName: "Hudson",
	age: 32,
	location: "Dar es Salaam"
};

const secondStudent: Student = {
        firstName: "Gabriel",
        lastName: "Hudson",
        age: 34,
        location: "Arusha"
};

const studentsList: Student[] = [firstStudent, secondStudent];

const table = document.createElement('table');
const tbody = document.createElement('tbody');
table.style.borderCollapse = "collapse";
table.appendChild(tbody);

studentsList.forEach((student: Student): void => {
  const row = document.createElement('tr');
  const nameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  nameCell.style.border = "1px solid black";
  locationCell.style.border = "1px solid black";
  nameCell.style.padding = "5px";
  locationCell.style.padding = "5px";

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

document.body.appendChild(table);
