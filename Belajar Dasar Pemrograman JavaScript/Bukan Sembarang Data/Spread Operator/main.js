// Object
const obj1 = { name: 'Dicoding' };
const obj2 = { lastName: 'Indonesia', address: 'Jl. Batik Kumeli No 50' };
const newObj = { ...obj1, ...obj2 };

console.log(newObj);

const originalObj = { name: 'Dicoding', age: 9 };
const copiedObj = { ...originalObj };

console.log(copiedObj);

// Array
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const mergedArray = [...array1, ...array2];

console.log(mergedArray);

const original = ['apple', 'banana', 'cherry'];
const copy = [...original];

console.log(copy);