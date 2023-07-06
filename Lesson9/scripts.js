const listNumber = [1, 2, 3];

// const computer = {
//     key1: value1,
//     key2: value2,
//     keyN: valueN
// }
// const computer = {
// 	name: 'Lenovo Thinkpad',
// 	price: 10,
// 	vendor: 'Lenovo',
// 	color: 'purple',
//     1: "một",
//     '0': "không"
// };
//Read: truy xuất
// Cách 1: dùng khi biết rõ key
// console.log(computer.'0');
// Cách 2: dùng khi key đang là giá trị của 1 biến khácc
// const price = 'abc'
// console.log(computer['0'])

// Update
const student = {
	name: 'Nguyễn Văn A',
    gender: 'girl'
};
console.log(student);
student['name'] = 'Trần Thị B';
//student.name = 'Trần Thị B';
student.age = 15;
console.log(student);

delete student.gender;
console.log(student);