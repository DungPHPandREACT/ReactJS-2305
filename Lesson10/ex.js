//Template string
// let birthday = "01/01/1998";
// let course = "Javascript"
// Bạn A sinh nhật ngày DD/MM/YYYY, môn học yêu thích course
// const str = 'Bạn A sinh nhật ngày ' + birthday + ' môn học yêu thích ' + course
// const str = `Bạn A sinh nhật ngày ${birthday} môn học yêu thích ${course}`
// const str = `Dòng 1
// Dòng 2
// Dòng 3`
// console.log(str);

// const student = {
// 	age: 20,
// 	name: 'Trần Thị B',
//     level: 30
// };

// // const age = student.age;
// // const name = student.name;

// const { age: tuoi, name, level = 1 } = student;

// console.log(level);

// const date = {
// 	d: 7,
// 	m: 11,
// };

// const { d: day, m, y = 2023 } = date;
// console.log(day);
// console.log(m);
// console.log(y);

// const numbers = [1, 2, 3, 4,5];
// const [,,...number] = numbers;
// console.log(number);

// const number1 = [1, 2];
// // number2 = [2,1]
// const [numberA, numberB] = number1;
// console.log(numberA);
// console.log(numberB);
// const number2 = [numberB, numberA];
// console.log(number2);

const student = {
	age: 35,
	name: 'Trần Thị B',
};
console.log(Object.keys(student));
console.log(Object.values(student));

console.log(student.hasOwnProperty('level'))