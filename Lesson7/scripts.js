// Nhập từ bàn phím 2 số n, m
// In ra màn hình tổng của 2 số đó

// let n = Number(prompt('Mời bạn nhập n', 10));
// let m = Number(prompt('Mời nhập m'));

// console.log(n + m);

// Nhập vào 2 số w và h là chiều cao và cân nặng của 1 người. Hãy tính chỉ số BMI và đưa ra kết quả:
// Nếu BMI < 18.5 → in ra “Nhẹ cân”
// Nếu 18.5 <= BMI < 23 → in ra “Bình thường”
// Nếu 23 <= BMI < 25 → in ra “Thừa cân”
// Nếu BMI >= 25 → in ra “Béo phì”

// const w = Number(prompt('Mời bạn nhập giá trị w: '));
// const h = Number(prompt('Mời bạn nhập giá trị h:'));
// const BMI = w / h;

// console.log('BMI: ', BMI);

// C1:
// if (BMI < 18.5) {
// 	alert('Nhẹ cân');
// }

// if (BMI >= 18.5 && BMI < 23) {
// 	alert('Bình thường');
// }

// if (BMI >= 23 && BMI < 25) {
// 	alert('Thừa cân');
// }

// if (BMI >= 25) {
// 	alert('Béo phì');
// }

// C2:
// BMI = 30
// if (BMI < 18.5) {
// 	alert('Nhẹ cân');
// } else if (BMI >= 18.5 && BMI < 23) {
// 	alert('Bình thường');
// } else if (BMI >= 23 && BMI < 25) {
// 	alert('Thừa cân');
// } else {
// 	alert('Béo phì');
// }

// In ra từ 1 -> 100
// C1:
// console.log(1);
// console.log(2);
// ...
// console.log(100);
// C2:
// for(let i = 1; i <= 100; i++){
//     console.log(i)
// }

// VD1: In ra màn hình từ 100 -> 1
// -Giá trị khởi tạo i = 100;
// -Điều kiện dừng: i >= 1
// -Sau vòng lặp: i--

// for (let i = 100; i >= 1; i--) {
// 	console.log(i);
// }

// VD2: In ra các số chẵn trong khoảng từ 1 -> 100
// -Gía trị khởi tạo i = 1;
// -Điều kiện để xảy ra vòng lặp: i<=100
// -Sau vòng lặp: i++

// C1;
// for (let i = 1; i <= 100; i++) {
// 	if (i % 2 === 0) {
// 		console.log(i);
// 	}
// }

// C2:
// for (let i = 2; i <= 100; i = i + 2) {
// 	console.log(i);
// }

// In 1 số ngẫu nhiên ra màn hình, khi số đây = 5 thì dừng lại
// let theNumber = 10;
// while (theNumber >= 5) {
// 	theNumber = Math.floor(Math.random() * 10);
// 	console.log(theNumber);
// }

// 2. Nhập vào 2 số 0 <= x < y <= 100.
// Hãy tăng dần giá trị của x, giảm dần giá trị của y
// và in ra các giá trị của x và y trong mỗi lần lặp cho đến khi x >= y.

// let x = 101;
// let y = -10;

// x < 0 || x > 100 : điều kiện 1
// y < 0 || y > 100 : điều kiện 2
// x > y: điều kiện 3
// while (x < 0 || x > 100 || y < 0 || y > 100 || x > y) {
// 	x = Number(prompt('Nhập x'));
// 	y = Number(prompt('Nhập y'));
// }

// while (x <= y) {
// 	console.log('x: ', x);
// 	console.log('y: ', y);
// 	x++;
// 	y--;
// }

// Ví dụ do while

// let x = 10;
// let y = 5;

// while (x < y) {
// 	console.log('ok');
// }
// Không in ra gì

// do {
// 	console.log('ok');
// } while (x < y);

// for (let i = 1; i <= 3; i++) {
//     console.log(i);
// 	if (i === 2) {
// 		break;
// 	}

// }

// Tính tổng từ 1 -> 5
// let sum = 0;
// for(let i = 1; i<= 5; i++){
//     sum = sum + i;
// }
// Chạy tay
// sum = 0 + 1 = 1
// sum = sum + 2 = 1 + 2 = 3
// sum = sum + 3 = 3 + 3 =6
// sum = sum + 4 = 6 + 4 = 10
// sum = sum + 5 = 10 +5

// 1. In ra dãy số từ 1 đến 500.
// for(let i = 1; i<=500; i++){
//     console.log(i)
// }

// 2. In ra các số chia hết cho 2 và 3 từ 1 đến 300.
// for (let i = 1; i <= 300; i++) {
// 	if (i % 2 === 0 && i % 3 === 0) {
// 		console.log(i);
// 	}
// }
// 3. Tính tổng các số chẵn trong đoạn [-30, 50].
// let sum=0;
// for (let i = -30; i <= 50; i++) {
// 	if (i % 2 === 0) {
// 		sum = sum + i;
// 	}
// }
// console.log(sum);
// 4. Nhập vào số n. Tính giai thừa của số n.
let n = 6;
let gt = 1;
for (let i = 1; i <= n; i++) {
	gt = gt * i;
}
console.log(gt);

// Chạy tay
// gt = 1;

// i = 1
// 	gt = gt * i <=> gt = gt * 1 <=> gt = 1 * 1 = 1
// i = 2
// 	gt = gt * i <=> gt = gt * 2 <=> gt = 1 * 2 = 2
// i = 3
// 	gt = gt * i <=> gt = gt * 3 <=> gt = 2 * 3 = 6
// i = 4
// 	gt = gt * i <=> gt = gt * 4 <=> gt = 6 * 4 = 24
// i = 5
// 	gt = gt * i <=> gt = gt * 5 <=> gt = 24 * 5 = 120
// i = 6
// 	gt = gt * i <=> gt = 120 * 6 = 720
