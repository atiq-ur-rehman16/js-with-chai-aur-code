// Primitive

// 7 types : String , Number,  Boolean, null, undefiend, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let useEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 4356238592963278n



// Reference (Non primitive)

//Array , Objects, Functions

const heros = ["shaktiman", "naagraj", "goga"];
let myObj ={
    name:"atiq",
    age: 22,
}

const myFunction = function (){
console.log("Hello world");
}

console.log(typeof anotherId);





// ++++++++++++++++++++++++++++++++++++

// stack (primitive), heap (Non-primitive)

let myYoutubename = " test"

let anothername = myYoutubename

anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@gamil.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "test@google.com"

console.log(userOne.email);
console.log(userTwo.email);
