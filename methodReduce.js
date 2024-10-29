const numbers = [1,2,3,4,5,6,7];

const total = numbers.reduce(sum, 0);

function sum(accumulator, value) {
    return accumulator + value;
}
console.log(total);


const numbers1 = [1,2,3,4,5,6,7];

const max = numbers.reduce(callback, -Infinity);

function callback(accumulator, value) {
    if (accumulator > value) {
        return accumulator;
    }else {
        return value;
    }
}
console.log(max);



const store = [
    {
        name:'Laptop',
        value:1500,
        count:5
    },
    {
        name: 'desktop',
        value: 1000,
        count:2
    },
    {
        name: 'phone',
        value: 500,
        count: 10
    }
];

const totalValueStore = store.reduce(
    (acc, item) => acc + item.value * item.count,0
);
console.log(totalValueStore);