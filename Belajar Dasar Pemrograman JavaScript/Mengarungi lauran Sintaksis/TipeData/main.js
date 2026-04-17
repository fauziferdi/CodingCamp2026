// STRING

const tes1 = "Ini merupakan contoh string di JavaScript";
const tes2 = 'Ini merupakan contoh string di JavaScript';
const tes3 = `Ini merupakan contoh string di JavaScript`;

console.log(tes1);
console.log(tes2);
console.log(tes3);

//String di dalam string
const tes4 = "Dia berkata, 'Halo, apa kabar?'";
const tes5 = 'Dia berkata, "Halo, apa kabar?"';
const tes6 = "Baris Pertama \n Baris Kedua";
const tes7 = `Baris Pertama.
Baris Kedua.`;
console.log(tes4);
console.log(tes5);
console.log(tes6);
console.log(tes7);

//String Template Literals 
const currentYear = 2026;
const nama = "Fauzi Ferdiansyah";

console.log(`Halo, nama saya ${nama} dan saya lahir pada tahun ${currentYear}.`);

//NUMBER
const number1 = 10;
const number2 = 3.14;
const number3 = 2e10;

console.log(number1);
console.log(number2);
console.log(number3);

//Number Infinity
const result = 50 / 0;
console.log(result);

//Number Nan
const result2 = 50 / "Fauzi";
console.log(result2);

//BOOLEAN
const isRaining = true;
const isSunny = false;

console.log(isRaining);

//Bolean perbandingan
const isAdult = 12 >= 18;
console.log(isAdult);


//NILAI KOSONG

//null
let message = null;
console.log(message);

//undefined
let message2;
console.log(message2);

const name1 = { first: 'Dicoding', last: null };
const name2 = { first: 'Dicoding', last: undefined };

console.log(JSON.stringify(name1));
console.log(JSON.stringify(name2)); 