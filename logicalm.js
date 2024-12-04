// const exp1 = 4 < 5 // True

// const exp2 = false // False

// const exp3 = "hello".length > 1 //True

// console.log(exp1 && exp2)

// console.log(exp1 && exp3)

const exp1 = [].length < 1 // True 

const exp2 = () => {
    console.log("I am expression 2")
    return true
} // True

const exp3 = 0 // False

const exp4 = () => {
    console.log("I am an expression 4")
    return true
} //
 console.log(exp1 && exp2() && exp3 && exp4())