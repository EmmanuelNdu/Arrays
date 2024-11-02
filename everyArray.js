//  The every() method in JavaScript is used to test 
// whether all elements in an array pass a provided test 
// implemented by a given function. It returns a boolean value:

const numbers = [ 1, 2, 3, 4, 5];

const res = numbers.every(isPositive);

function isPositive(item) {
    return item > 0;
}
console.log(res);



const persons = [
    {
        name:"Florin",
        
    },
    {
        name:"Ivan",
        
    },
    {
        name:"Liam",
    },
    {
        name:"Jai"
    }
];

const ress = persons.every(person => person.name!== undefined );

console.log(ress);

const arrys = [
    [1, 2, 3],
    [4, 5, 6],
    '7, 8, 9'
]

const resss = arrys.every(arry => Array.isArray(arry));

console.log(resss);