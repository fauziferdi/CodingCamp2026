const employees = [
    {
        name: 'Fulan',
        email: 'fulan@dicoding.com',
        joinYear: 2020,
    },
];

function addEmployee(name, email, joinYear) {
    /**
     * @TODO
     * lengkapi fungsi ini agar dapat menambahkan objek employee baru
     * berdasarkan nilai argumen fungsi dan simpan ke dalam array `employees`
     */

    // Tulis kode Anda di sini
    employees.push({ name, email, joinYear });
    console.log('Employee added:', name);


}

addEmployee("Budi", "[EMAIL_ADDRESS]", 2022);
console.log(employees);
