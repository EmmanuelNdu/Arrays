// It convert other datatypes to an array

const  str = '1234567'

// [1, 2, 3, 4, 5, 6, 7]

const res = Array.from(str);

console.log(res);

// Removing the duplicated value and convert into an array
const numbers = [1, 2, 3, 3, 2, 1, 4, 4, 3, 2, 1, 5];

const ress = Array.from(new Set(numbers));
console.log(ress);