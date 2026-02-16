// # Primitve datatypes 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 10
const scoreValue = 10.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;  // undefined

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId);  // false because symbol is unique

const bigNumber = 453532342121434n  // n at the end is used to denote that this is a bigInt




// Reference Types (Non-primitive datatypes)

// Array, Objects, Functions


const heros = ["Ironman", "Spiderman", "Thor"]  // array
let myObj = {
    name: "Sagar",  // object
    age: 22,
    isLoggedIn: false
}


const myFunction = function(){
    console.log("Hello world")
}

console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFunction);