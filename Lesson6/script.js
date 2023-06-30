// alert('Xin chào');

// 3 từ khóa để khởi tạo biến
// var
// let
// const

//1. var/let và const
//Từ khóa var dùng để khai báo 1 biến và biến đó có thể thay đổi giá trị
// var a = 10;
// console.log(a);
// a = 20;
// console.log(a);
//Từ khóa let dùng để khai báo 1 biến và biến đó có thể thay đổi giá trị
// let b = 40;
// console.log(b);
// b = 50;
// console.log(b);
//Từ khóa const (constant) dùng để khai báo 1 biến hằng số, và không thể gán lại giá trị
// const c = 100;
// console.log(c);
// c = 200;
// console.log(c);

// var a;
// console.log(a);
// a = 10;
// console.log(a);

// let b;
// console.log(b);
// b = 20;
// console.log(b);

// const c;
// console.log(c);
// c = 100;
// console.log(c);
//Khi khởi tạo biến bằng từ khóa let, var thì không nhất thiết phải gán luôn giá trị khởi tạo
//Khi khởi tạo biến bằng từ khóa const thì phải gán luôn giá trị khởi tạo

// 2. var và let/const
//var có cơ chế hoisting, const và let không có cơ chế hoisting

// console.log(a);
// var a = 10;
// console.log(a);

// console.log(b);
// let b = 20;
// console.log(b);

//scope: biến được khởi tạo bằng từ khóa var sẽ là global scope
// {
// 	var couse1 = 'HTML';
// 	let couse2 = 'CSS';
// 	const couse3 = 'JS';
// }
// console.log(couse1);
// console.log(couse2);
// console.log(couse3);

// Khởi tạo biến có kiểu dữ liệu là number
// let c = 10;
// Khởi tạo biến có kiểu dữ liệu là string
// let paragraph = 'Đây là đoạn văn'
// let paragraph = "Đây là đoạn văn"
// let paragraph = `Đây là đoạn văn`;
// console.log(paragraph);
// Khởi tạo biến có kiểu dữ liệu là boolean
// let isGirl = false;

// let a = 10;
// let b = '20';
// let c = a * b;
// console.log(typeof c);
// console.log(c);

// let a = 10;
// let b = '10';

// a == b;
// a === b;
// console.log(a == b); // true
// console.log(a === b); // false

// console.log(a != b);
// console.log(a !== b);

// x = true, y = true, z = false

// x && y && z → ?
// x && y && !z → ?
// (x && y) || z → ?
// (x && y) || !z → ?
// x && (y || z) → ?
// x && !(y || z) → ?
// x && (y || !z) → ?
// x && (!y || z) → ?

//

// if(dieu_kien){
//     //code
// }
// dieu_kien = true => thực hiện //code
// dieu_kien = false => không thực hiện code
// let number = 2;
// if (number < 5) {
// 	console.log('Số number nhỏ hơn 5');
// }

const a = 10;
const b = '10';
// if (a === b) {
// 	console.log('Hai giá trị bằng nhau');
// }

if (a == b) {
	console.log('Hai giá trị bằng nhau');
} else {
	console.log('Hai giá trị này không bằng nhau');
}

const gpa = 5.0;

if (gpa >= 8.0) {
	console.log('Học sinh giỏi');
} else if (gpa <= 8.0 && gpa >= 6.5) {
	// 8.0 >= gpa >=6.5
	// => gpa <= 8.0 && gpa >= 6.5
	console.log('Học sinh khá');
} else {
	console.log('Học sinh trung bình');
}
