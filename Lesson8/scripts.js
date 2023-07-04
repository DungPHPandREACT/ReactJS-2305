// -Kiểu dữ liệu nguyên thủy
// 	+String
// 	+Number
// 	+Boolean
// 	+Null
// 	+Undefined
// -Kiểu dữ liệu tham chiếu
// 	+Array
// 	+Object

// for( ; true ; ){
// 	if(condition){
// 		//code gì đó
// 		break;
// 	}
// }

let number = 10;

// Cách khởi tạo arr
// Cách 1
// let arr = []; //mảng rỗng
// const arr = [1, 2, 3, 'a', 'abc', true, null, undefined, [4, 5, 6]];
// let arr = [123]
// Cách 2
// let arr = new Array(1, 2, 3);
//Lấy giá trị của phần tử ở vị trí index = 0 trong mảng
// console.log(arr[0]);
//Thay đổi phần tử trong mảng
// arr[0] = 'xyz';
// console.log(arr);

// Kiểm tra độ dài của mảng
// console.log(arr.length)

// Duyệt mảng
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// // ...
// console.log(arr[8]);

//9 phần tử
// => index = 8 (phần tử cuối cùng)
// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

// . Khai báo 1 mảng gồm 4 số bất kỳ khác nhau.
// const listNumber = [1, 3, 5, 6];
// In ra phần tử có chỉ số 0 và 3 trong mảng.
// console.log(listNumber[0], listNumber[3]);
// Thực hiện phép cộng giữa phần tử có chỉ số 1 và 2.
// const sum = listNumber[1] + listNumber[2];
// console.log('sum: ', sum);
// Thực hiện hoán đổi giá trị của phần tử có chỉ số 1 và 3.
// [1,6,5,3]
// console.log(listNumber);
//Cách sai
// listNumber[1] = listNumber[3];
// // listNumber[1] = 3
// // listNumber[3] = 6
// // listNumber[1] = 6
// // => Output code line 60: [ 1, 6, 5, 6 ]
// listNumber[3] = listNumber[1];

//Cách hay làm
// let temp  = listNumber[1];
// listNumber[1] = listNumber[3];
// listNumber[3] = temp;
// console.log(listNumber);

// Cách 1: Dùng trong trường hợp cần cả index của mảng
// for (let i = 0; i < listNumber.length; i++) {
//     console.log(i)
// 	console.log(listNumber[i]);
// }
//Cách 2: Dùng trong trường hợp chỉ cần lấy giá trị trong mảng
// for (let number of listNumber) {
// 	console.log(number);
// }

// Khai báo 1 mảng gồm các số bất kỳ.
const listNumber = [10, 4, 3, 7, 11, 20, 35];
// Hãy in ra các số chẵn trong mảng đó.
// for (let number of listNumber) {
// 	if (number % 2 === 0) {
// 		console.log(number);
// 	}
// }
// Hãy tính tổng các phần tử trong mảng.
// let sum = 0;
// for (let number of listNumber) {
// 	sum = sum + number;
// }
// console.log(sum);
// Hãy tìm phần tử nhỏ nhất trong mảng.
// let min = listNumber[0];
// for (let number of listNumber) {
// 	if (number < min) {
// 		min = number;
// 	}
// }

// console.log(min);

console.log(listNumber);
// Method push
// listNumber.push(100, 200);
// Method unshift
// listNumber.unshift(100);
// Method pop
// listNumber.pop();
// listNumber.pop();
// Method shift
// listNumber.shift();
// Method splice
// Dungf splice để xóa phần tử
// splice(index, deleteCount)
// listNumber.splice(listNumber.length -1,1)
// Dungf splice để thêm phần tử
// splice(index, 0, element1, ..., elementN)
listNumber.splice(3, 1, 33);
console.log(listNumber);
