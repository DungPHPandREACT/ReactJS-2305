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
const btnAdd = document.getElementById('btn-add');

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

btnAdd.onclick = function () {
	const id = Number(document.getElementById('id').value);
	const name = document.getElementById('name').value;
	const age = Number(document.getElementById('age').value);
	const gender = document.getElementById('gender').value;
	const point = Number(document.getElementById('point').value);

	let isExistId = false;

	for (let student of listStudent) {
		if (student.id === id) {
			isExistId = true;
		}
	}

	if (isExistId) {
		alert('Id đã tồn tại, yêu cầu nhập lại');
	} else {
		const newStudent = {
			id: id,
			name: name,
			age: age,
			gender: gender,
			point: point,
		};

		listStudent.push(newStudent);
	}
};
