const numbers = [1,2,3,4,5,6,7,8,9,10];

const even = numbers.filter(isEven);

function isEven(value) {
    return value %2 === 0;
}
console.log(even);


const people = [
    {
        name:"Florin",
        age:26
    },
    {
        name:"Ivan",
        age:18
    },
    {
        name:"Jai",
        age:15
    }
];

const adults = people.filter(person => person.age >= 18);
console.log(adults);


const numbers1 = [1,2,3,3,1,2,4,3,5,6];

const nums = numbers1.filter((value, index, arr) => {
    return arr.indexOf(value) === index;
});

console.log(nums);

const products = [
    {
        name:'Laptop',
        price:1500,
        count:5
    },
    {
        name: 'desktop',
        price: 1000,
        count:2
    },
    {
        name: 'phone',
        price: 500,
        count: 10
    },
    {
        name: 'phone',
        price: 5000,
        count: 10
    },
    {
        name: 'phone',
        price: 2001,
        count: 10
    }
];

// filter the array product of only the item >= 1500 or =< 6000

const highest = products.filter(bigamount => bigamount.price >= 1000 && bigamount.price <= 2000 );
console.log(highest);