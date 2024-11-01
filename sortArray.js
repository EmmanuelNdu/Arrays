const names = ['Florin', 'Ivan','Liam', 'Jam'];

names.sort();
console.log(names);

const numbers = [74, 18, 10, 5, 84, 24, 105];
 numbers.sort(compareFunction);

 console.log(numbers);

 function compareFunction(a, b) {

    //1. < 0 ... a comes first
    //2. 0 ... nothing will be changed
    //3. > 0 ... b comes first
    return a - b
 }

 const products = [
    {
        name:'Laptop',
        price:1000,
    },
    {
        name: 'desktop',
        price: 1500,
    },
    {
        name: 'phone',
        price: 500,
    }
];

products.sort((a, b) => {
    return a.price - b.price; // Ascending order , //  return b.price - a.price;
});
console.log(products);
