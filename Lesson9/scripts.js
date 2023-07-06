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
// const student = {
// 	name: 'Nguyễn Văn A',
//     gender: 'girl'
// };
// console.log(student);
// student['name'] = 'Trần Thị B';
// //student.name = 'Trần Thị B';
// student.age = 15;
// console.log(student);

// delete student.gender;
// console.log(student);

// const listStudent = [
// 	{
// 		name: 'Nguyễn Văn A',
// 		gender: 'girl',
// 	},
// 	{
// 		name: 'Trần Thị B',
// 		gender: 'girl',
// 		skills: ['C++', 'Python'],
// 	},
// ];
// console.log(listStudent[1].skills[0]);

// Duyệt object
const student = {
	name: 'Trần Thị B',
	gender: 'girl',
	skills: ['C++', 'Python'],
};
// C1
// console.log(student.name);
// console.log(student.gender);
// console.log(student.skills);
// C2: for in
// for(let abc in student){
//     console.log(student[abc])
// }

// const arr1 = [1, 2, 3];
// const arr2 = []; // [1, 2, 3]
// for (let element of arr1) {
// 	arr2.push(element);
// }
// arr1[2] = 33;
// console.log('arr1: ', arr1);
// console.log('arr2: ', arr2);

// const stu1 = { name: 'ABC', age: 15 };
// const stu2 = stu1;
// stu2.name = 'XYZ'
// console.log('stu1: ', stu1);
// console.log('stu2: ', stu2);

// let num1 = 10;
// let num2 = num1;
// num1 = 100;
// console.log('num1: ', num1);
// console.log('num2: ', num2);

// Tính tổng các số từ A -> N
// function nameFn(parameter1,..., parameterN){
//     //Code_block
// }
// function: từ khóa (bắt buộc có)
// nameFn: tên function
// parameter1, ...parameterN: những tham số được truyền vào hàm
// Code_block: đoạn code muốn đóng gói

// function calSum(A, N) {
// 	console.log('A: ', A);
// 	console.log('N: ', N);
// 	let sum1 = 0;
// 	for (let i = A; i <= N; i++) {
// 		sum1 += i;
// 	}
// 	console.log(sum1);
// }

// - A = 1; N = 10;
// calSum(1, 10);
// - A = -20; N = 100;
// calSum(-20, 100);
// - A = 1; N = 500;
// calSum(1, 500);
// - A = 6; N = 90
// calSum(6, 90);

// function logger(name1, name2) {
// 	console.log('Xin chào bạn: ' + name1);
// 	console.log('Xin chào bạn: ' + name2);
// }
// logger('Văn A');
// let test = 'xyz';

// const text = logger('Văn A');
// Xin chào bạn: Văn A
// console.log(text);

// 1. Khai báo 1 function nhận đầu vào là chuỗi name,
//  thực hiện in ra màn hình “Hello world, ” + name.
// function logger(name) {
// 	const result = 'Hello world, ' + name;
// 	console.log(result);
// }
// logger('Nguyễn Thị B');
// logger('Trần Thị C');

// 2. Khai báo 1 function nhận đầu vào là 2 số a, b.
// Đầu ra là kết quả của phép tính (a + b)^2 .
// function cal(a, b) {
// 	return (a + b) ** 2;
// }
// const result = cal(3, 4);
// console.log(cal(3, 4));
// console.log(result);
// 3. Khai báo 1 function để nhập vào a từ bàn phím,
// tiếp tục nhập đến khi a là một số lớn hơn 0.
//  Đầu ra là giá trị số vừa nhập.

function A() {
	console.log('Function A');
}

// function B(callback) {
//     callback();
// 	console.log('Function B');
// }

// B(A);

//Thực hiện 1 nhiệm vụ sau n milisecond
// setTimeout(callback, n);

function logger() {
	console.log('Test timeout');
}
// setTimeout(logger, 2000);
const abc = setInterval(logger, 1000);
clearInterval(abc);
// setTimeout(function () {
// 	console.log('In ra sau 3 giây');
// }, 3000);
