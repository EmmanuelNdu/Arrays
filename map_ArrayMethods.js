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
    }
];

const totalProductsValue = products.map(item => ({name:item.name,totalValue: item.price * item.count}));
console.log(totalProductsValue)

const productsValue = products.map(item => ({name:item.name}));
console.log(productsValue)



const str = ['1', '2', '3', '4']; // Converting Array of string into numbers
const numbers = str.map(Number);
console.log(numbers);

const students  = [{id: 123, age: 18, name: 'Femi'}, { id: 434, age: 16, name: 'Carter'}]

// from student create an array from student in which the data or object in array returns
//just the id another field called is_an_adult
// eg [{ id: 456, is_an_adult}]
//nb: is_an_adult is a field determined when student is 18 or above 18
//tips:: use map array function


const bag  = { color: 'red', size: 'large', brand: 'dior'} 
const color = bag.color

const studentIdAndAdultstatus = students.map(student => {
    let is_an_adult = false;
    if (student.age >= 18) {
        is_an_adult = true
    }
    return {
        id: student.id,
        is_an_adult: is_an_adult
}})

console.log("new student", studentIdAndAdultstatus)




const users = [
    { name: 'femi', age: 28, password: '4r34nfkefnekr3', race: 'black'},

    { name: 'carter', age: 61, password: '4r34nf5757nekr3', race: 'bisfrsn'}, 
 ]

 const nameAndPassword = users.map(persons => ({name:persons.name, password:persons.password}));
  console.log(nameAndPassword);