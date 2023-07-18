const listStudent = [
	{
		id: 1, //duy nhất
		name: 'Nguyễn Văn A',
		age: 15,
		gender: 'boy',
		point: 10,
	},
	{
		id: 2, //duy nhất
		name: 'Trần Thị B',
		age: 15,
		gender: 'girl',
		point: 5,
	},
	{
		id: 3, //duy nhất
		name: 'Binz',
		age: 15,
		gender: 'girl',
		point: 7,
	},
	{
		id: 4, //duy nhất
		name: 'ABC',
		age: 15,
		gender: 'girl',
		point: 10,
	},
];

const tableStudent = document.getElementById('table-student');

let stringHTML = '';
for (let student of listStudent) {
	// console.log(student);
	// student.id
	stringHTML += `
                    <tr>
						<th scope="row">${student.id}</th>
						<td>${student.name}</td>
						<td>${student.age}</td>
						<td>${student.gender}</td>
                        <td>${student.point}</td>
					</tr>
    `;
}

console.log(stringHTML);
tableStudent.innerHTML = stringHTML;
