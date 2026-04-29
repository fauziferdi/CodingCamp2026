// Membuat Set
const mySet = new Set([1, 2, 3]);
console.log(mySet);

//Menyimpan Nilai di Set
const set = new Set();
set.add(1);
set.add('hello');
console.log(set);

//set tidak bisa duplikat
set.add(1);
console.log(set);

// Mengakses Nilai di Set
set.add('hello2');
set.add('hello3');
for (const number of set) {
    console.log(number);
}
set.forEach((value) => console.log(value));

// Menghapus Nilai di Set
set.delete('hello');
console.log(set);