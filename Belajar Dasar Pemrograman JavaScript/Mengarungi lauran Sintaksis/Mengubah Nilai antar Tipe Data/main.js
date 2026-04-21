// Konversi Eksplisit

// Mengubah ke string

const number = 123;
const boolean = true;

const strNumber = String(number);
const strBoolean = boolean.toString();

console.log(strNumber);
console.log(strBoolean);

// mENGUBAH kE nUMBER

const strNumber2 = '1233';
const strNumber3 = '22222f';
const strFloat = '3.14';
const boolean2 = true;

const numNumber = Number(strNumber2);
const numNumber2 = parseInt(strNumber3);
const numFloat = parseFloat(strFloat);
const numFromBoolean = Number(boolean2);

console.log(numNumber);
console.log(numNumber2);
console.log(numFloat);
console.log(numFromBoolean);

// Mengubah ke Boolean

const strNumber4 = '1233';
const strNumber5 = '22222f';
const strFloat2 = '3.14';
const empty = null;

const boolNumber = Boolean(strNumber4);
const boolNumber2 = Boolean(strNumber5);
const boolFloat = Boolean(strFloat2);
const boolFromBoolean = Boolean(empty);

console.log(boolNumber);
console.log(boolNumber2);
console.log(boolFloat);
console.log(boolFromBoolean);

// Konversi Implisit

const age = 20;
const message = 'Umurku: ' + age;

console.log(message);

const strNumberr = '123';
const result = strNumberr * 2;

console.log(result);

const bool = true;
const result2 = 1 + bool;

console.log(result2);