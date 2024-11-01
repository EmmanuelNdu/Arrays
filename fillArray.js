// const numbers = [1, 2, 3, 4, 5]

// const num2 = numbers.fill(0); // fill() will change the array in which it is called
// console.log(numbers);
// console.log(num2);

function fillInNumbers(n) {
    return Array(n)
    .fill(0)
    .map((_, idx) => idx + 1 ); 
}

console.log(fillInNumbers(10));