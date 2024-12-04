// rest Operator in an object

const take = {name:"Bola", 
    school:"Yabatech",
    Street:"Yaba",
    Age:25,
    country:"Nigeria",
    Status: true
};

const {name, ...must} = take;

console.log(name ,must)

// rest operator in an array

const numbers = [1,2,3,4,5,6,7,8,9,10]
 // destructuring the arrays

 const [first, second, ...rest ] = numbers;

 console.log(first, second, ...rest);
 console.log(...rest)