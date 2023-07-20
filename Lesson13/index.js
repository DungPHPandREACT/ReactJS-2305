// console.log('Một'); // Thứ tự 1
// const PI = 3.14;
// console.log('Hai'); // Thứ tự 2
// PI = 10; //error
// console.log('Ba'); // Thứ tự 3

// => Đồng bộ: chạy lần lượt từ trên xuống dưới
//=> Bất đồng bộ: setTimeout, setInterval, Http request

// console.log('Một');
// setTimeout(() => {
// 	console.log('Hai');
// }, 0);
// console.log('Ba');
// console.log('Bốn');

// 3 cách xử lý bất đồng bộ
//+Call back
//+Promise
//+Async-await

// function logger(parameter) {
// 	console.log('logger');
// }

// function testCallback() {
// 	console.log('callback');
// }

// logger(testCallback());

// setTimeout(() => {
// 	console.log(4);
// 	setTimeout(() => {
// 		console.log(3);
// 		setTimeout(() => {
// 			console.log(2);
// 			setTimeout(() => {
// 				console.log(1);
// 			}, 1000);
// 		}, 2000);
// 	}, 3000);
// }, 4000);

var promise = new Promise(function (resolve, reject) {
	setTimeout(() => {
		resolve(4);
	}, 4000);
});

promise
	.then(function (x) {
		console.log(x);
		return new Promise(function (resolve, reject) {
			setTimeout(() => {
				resolve(3);
			}, 3000);
		});
	})
	.then(function (y) {
		console.log(y);
		return new Promise(function (resolve, reject) {
			setTimeout(() => {
				resolve(2);
			}, 2000);
		});
	})
	.then(function (z) {
		console.log(z);
	})
	.catch(function (err) {
		console.log('vào reject ', err);
	})
	.finally(function () {
		console.log('finally');
	});
