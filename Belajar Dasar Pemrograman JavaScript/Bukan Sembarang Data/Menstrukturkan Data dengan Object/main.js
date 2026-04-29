// Membuat Object
const user = {
    name: "Fauzi",
    'last name': 'Ferdiansyah',
    age: 20,
}

console.log(user);

// Mengakses Properti di Object
console.log(user.name);
console.log(user["last name"]); //square bracket digunakan ketika nama properti mengandung spasi
console.log(user.age);

// Mengakses menggunakan object destructuring
const { name, 'last name': lastname } = user;
console.log(name, lastname);

// Mengubah Nilai di Properti Object
user.name = "Budi";
console.log(user.name);

// Menghapus Properti di Object
delete user.age;
console.log(user);
