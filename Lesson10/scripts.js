// +Truthy và falsy
//Các giá trị falsy: undefined, null, false, 0, -0, 0n, NaN, ""
// if(condition){
//     //code
// }
// let number = ' ';
// if (number) {
// 	console.log('In ra 1 cai gi day');
// }

// Tạo ra 2 biến number và n, n (nhập từ bàn phím),
// Nếu n > 5 => number = 10;
// Nếu n <= 5 => number = -10;

// let n = Number(prompt('Nhập n'));
// let n;
//Cách 1
// let number;
// if (n > 5) {
// 	number = 10;
// } else {
// 	number = -10;
// }
//Cách 2: sử dụng toán tử 3 ngôi
// let number = n ? 10 : -10;
// console.log(number);

// + Nullish operator
//Tạo 2 biến, number và n,
// nếu n là 1 giá trị truthy => number = n
// nếu n là 1 giá trị falsy => number = 20

// let n = 0;
// // let number = n ? n : 20;
// let number1 = falsy || 20;
// let number2 = null / undefined ?? 20;
// console.log('number1: ', number1);
// console.log('number2: ', number2);
