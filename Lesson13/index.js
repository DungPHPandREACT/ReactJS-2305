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

const promise = new Promise((resolve, reject) => {});

function testPromise(number) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (number > 5) {
				return resolve(true);
			} else {
				return reject('Lỗi rồi');
			}
		}, 2000);
	});
}

async function callPromise() {
	testPromise(4)
		.then((x) => {
			console.log('vào resolve ', x);
		})
		.catch((error) => {
			console.log('vào reject: ', error);
		});

	try {
		const result = await testPromise(4);
		console.log('vào resolve ', result);
	} catch (e) {
		console.log('vào reject', e);
	}
}

callPromise();
