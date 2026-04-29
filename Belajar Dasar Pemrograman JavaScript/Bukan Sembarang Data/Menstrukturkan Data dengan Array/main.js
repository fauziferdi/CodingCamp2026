// Membuat Array
const users = new Array();
console.log(users);

// Menggunakan sintaks Array.from
const foo = Array.from('foo');
console.log(foo); // Output: ['f', 'o', 'o']

// Array.from juga dapat dimanfaatkan untuk menyalin array lainnya seperti berikut ini.
const users2 = new Array('John', 'Jane', 'Jack', 'Jill');
const customer = Array.from(users2);
console.log(customer);

// Menggunakan array literal
const array = [];
const fruits = ['Apple', 'Banana', 'Mango'];
console.log(fruits);

// Mengakses Element Array
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// Length Array
console.log(fruits.length);

const last = fruits[fruits.length - 1];
console.log(last);

// Manipulasi Nilai Array
let myArray = [1, 2, 3, 4, 5];
myArray[1] = 10;
console.log(myArray);

// Menggunakan push
myArray.push(6);
console.log(myArray);

// Menghapus Element dan Data Array
delete myArray[0];
console.log(myArray);
//agar tidak empty maka pakai splice
myArray.splice(5, 1);
console.log(myArray);
//menghapus dengan shift dan pop
myArray.shift(); //menghapus element pertama
myArray.pop(); //menghapus element terakhir
console.log(myArray);

// Array Destructuring
const introduction = ['Hello', 'Arsy'];
const [greeting, name] = introduction;
console.log(greeting);

// Array Method
//reverse
const myArray2 = ['Android', 'Data Science', 'Web'];
myArray2.reverse();
console.log(myArray2); // Output: [ 'Web', 'Data Science', 'Android' ]

//Sort
const month = ['March', 'Jan', 'Feb', 'Dec'];
month.sort();
console.log(month); // Output: [ 'Dec', 'Jan', 'Feb', 'March' ]
