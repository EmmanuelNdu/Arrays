// This find() will find the index and return the element
const persons = [
    {
        name:'Florin',
        age:25,
        country:'Nigeria'
    },
    {
        name:'Ivan',
        age:20,
        country:'France'
    },
    {
        name:'Liam',
        age:18,
        country:'Mali'
    }
];

const country = persons.find(findFlorin).country;

function findFlorin(persons) {
    return persons.name == 'Florin'
}

console.log(country);