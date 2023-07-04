// 1. Khai báo 1 mảng gồm các số bất kỳ.
const listNumber = [10, 205, 607, 59, -95, 100, -1, 0, 345, 346];
// Tính tích của các phần tử trong mảng đó.
// let sum = 1;
// for (let number of listNumber) {
// 	sum = sum * number;
// }
// console.log(sum);

// Tìm số nhỏ nhất mà chia hết cho 2 trong mảng.

// Tìm số lớn nhất và chia hết cho 3 trong mảng.
// let a = [];
// for (let i = 0; i < listNumber.length; i++) {
// 	if (listNumber[i] % 3 === 0) {
// 		a.push(listNumber[i]);
// 	}
// }

// console.log(a);

// let max = a[0];
// for (let j = 0; j < a.length; j++) {
// 	if (a[j] > max) {
// 		max = a[j];
// 	}
// }
// console.log(max);
// Tính giá trị trung bình của mảng.
// let sum = 0;
// for(let number of listNumber) {
//     sum += number;
// }
// let avg = sum / listNumber.length;
// console.log(avg);

// Lọc ra các số nguyên tố trong mảng.
// for (let number of listNumber) {
// 	console.log(number);
// 	//
// 	let count = 0;
// 	//number 7
// 	// i = 1; => 7 % 1 = 0 => count =1
// 	// i = 2; => 7 %2 != 0 => count = 1
// 	// ...
// 	// i = 7; => 7 % 7 = 0 => count = 2
// 	for (let i = 1; i <= number; i++) {
// 		if (number % i === 0) {
// 			count = count + 1;
// 		}
// 	}

// 	if (count === 2) {
// 		console.log(number, 'là số nguyên số');
// 	} else {
// 		console.log(number, 'không phải số nguyên tố');
// 	}
// }

// Kiểm tra xem trong mảng có số nhỏ hơn 10 hay không.
// let isExist = true;
// for (let number of listNumber) {
// 	if (number <= 10) {
// 		isExist = false;
// 		break;
// 	}
// }
// if (isExist === true) {
// 	console.log('trong mảng k có số nào nhỏ hơn 10');
// } else {
// 	console.log('trong mảng có số nhỏ 10');
// }

// Kiểm tra xem tất cả phần tử trong mảng có lớn hơn 20 không.
// let isExist = true;

// for (let number of listNumber) {
// 	if (number <= 20) {
// 		isExist = false;
// 		break;
// 	}
// }

// if (isExist === true) {
// 	console.log('Không có số nào nhỏ hơn 20');
// } else {
// 	console.log('Trong mảng có phần tử nhỏ hơn 20');
// }
// Nhập vào số n cho đến khi n là 1 số trong mảng listNumber.
// includes
console.log(listNumber.includes(-10));
let n;
do {
	n = Number(prompt('Mời bạn nhập n:'));
} while (listNumber.includes(n) === false);
