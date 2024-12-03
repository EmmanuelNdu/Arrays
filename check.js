// Looping through Objects

const person = {  // person is an object which holds the key value pair 
    name: "Joy", // name is key while "joy" is the value
    age: 12,
    isStudent: false
};
//console.log(person.age)
//For...in
//  for(const liam in person) {
//     const value = person[liam]

//     console.log(liam, value)
//  }

//  console.log("name" in person)

// object.keys()

const keys = Object.keys(person)

keys.forEach(key => {
    const value = person[key]

    console.log(key, value)
})