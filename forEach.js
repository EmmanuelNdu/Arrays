const letters = ['a','b','c','a','b','a','d'];

let count = [];

letters.forEach(item =>{
    if (count[item]) {
        count[item]++;
    } else {
        count[item] =1;
    }
    console.log(count);
})