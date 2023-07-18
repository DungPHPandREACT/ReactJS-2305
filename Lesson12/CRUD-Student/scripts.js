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
const btnUpdate = document.getElementById('btn-update');
const listBtnDelete = document.getElementsByClassName('btn-delete');
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
		renderStudent();

		//clear input
		document.getElementById('id').value = '';
		document.getElementById('name').value = '';
		document.getElementById('gender').value = '';
		document.getElementById('age').value = '';
		document.getElementById('point').value = '';
	}
};

function renderStudent() {
	let stringHTML = '';
	for (let i = 0; i < listStudent.length; i++) {
		let student = listStudent[i];
		stringHTML += `
                    <tr>
						<th scope="row">${student.id}</th>
						<td>${student.name}</td>
						<td>${student.age}</td>
						<td>${student.gender}</td>
                        <td>${student.point}</td>
                        <td>
                            <button type="button" class="btn btn-success btn-update" onclick='updateStudent(${i})'>Update</button>
                            <button type="button" class="btn btn-danger btn-delete" onclick='deleteStudent(${i})'>Delete</button>
                        </td>
					</tr>
    `;
	}

	console.log(stringHTML);
	tableStudent.innerHTML = stringHTML;
}

function deleteStudent(index) {
	listStudent.splice(index, 1); //xóa phần tử vị trí index trong mảng
	renderStudent(); // render lại theo dữ liệu mới
}

//Update
function updateStudent(index) {
	const student = listStudent[index];

	//Hiển thị lên input
	document.getElementById('id').value = student.id;
	document.getElementById('name').value = student.name;
	document.getElementById('gender').value = student.gender;
	document.getElementById('age').value = student.age;
	document.getElementById('point').value = student.point;

	btnUpdate.style.display = 'inline';
	btnAdd.style.display = 'none';
}

renderStudent();
