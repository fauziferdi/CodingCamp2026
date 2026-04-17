// Wadah untuk menampung nilai atau data yang dapat digunakan dan dimanipulasi dalam program.

const id = 123;
let username = 'Fauzi Ferdiansyah';

console.log(id);
console.log(username);

/*
ketika membuat variabel dengan let, 
Anda bisa mengubah nilai yang ada di dalamnya setelah variabel tersebut dibuat.
*/
let name = 'Fauzi Ferdiansyah';
console.log('Sebelum Diubah:', name);

name = 'Fauzi Ferdiansyah Ganteng';
console.log('Setelah Diubah:', name);

/*
ketika membuat variabel dengan const, 
Anda tidak bisa mengubah nilai yang ada di dalamnya setelah variabel tersebut dibuat.
*/

// const nama2 = 'Fauzi Ferdiansyah';
// console.log('Sebelum Diubah:', nama2);

// nama2 = 'Fauzi Ferdiansyah Ganteng';
// console.log('Setelah Diubah:', nama2);


// nama variabel yang benar
const firstName = 'Fulan';
const last_name = 'Lestari';
const $message = 'Hello, World!';
const userId1 = 123;
const userId2 = 456;

// nama variabel yang salah
// const first-name = 'Fulan'; // tidak boleh mengandung karakter -
// const last name = 'Lestari'; // tidak boleh mengandung spasi
// const @message = 'Hello, World!'; // tidak boleh mengandung karakter @

// nama variabel yang benar
const firstNamee = 'Fulan';
const _secondName = 'Fulana';

// nama variabel yang salah karena diawali dengan angka
// const 1stName = 'Fulan';
// const 2ndName = 'Fulana';
