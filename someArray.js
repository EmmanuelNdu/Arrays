const numbers = [ 1, 2, 3, 4, 5];

const res =  numbers.some (greaterThanFour);

function greaterThanFour(item) {
    return item >4;
}

console.log(res);


const persons = [
    {
        name:'Florin',
        age: 15
    },
    {
        name:'Liam',
        age: 10
    },
    {
        name:'Ivan',
        age: 16
    }
];

const ress = persons.some(isAdult);

function isAdult(persons) {
    return persons.age >= 18;
}

console.log(ress);