// Return Value
function sumNumbers(a, b) {
    const result = a + b;
    return result;
}

const result = sumNumbers(2, 4);
console.log('2 + 4:', result);

/* Output:
2 + 4: 6
*/

// return value akan berhentikan program dan program dibawahnya akan daiabaikan
function generateGreetingWorldMessage() {
    return 'Halo, dunia!';
    console.log('Aku tidak akan tampil!');
}

const message = generateGreetingWorldMessage();
console.log(message);