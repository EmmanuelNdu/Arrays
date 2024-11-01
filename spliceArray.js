// The splice() is use to add or delete item from an existing Array
// The splice() which change the array on which it's called upon

const numbers = [1,2,3,4,5];

const deleted = numbers.splice(2, 0, 6, 7);
console.log(numbers);
console.log(deleted);