const take = {name:"Bola", 
    school:"Yabatech",
    Street:"Yaba",
    Age:25,
    country:"Nigeria",
    Status: true
};

const {name, ...must} = take;

console.log(name ,must)