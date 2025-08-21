const score = 400
// console.log(score);


const balance = new Number(100)
// console.log(balance);

// console.log(balance.toFixed(2)); //decimal point ke baad digits limit karta hai


const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));//total digits fix karta hai


const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-PK'));


//+++++++++maths +++++++++++++++


// console.log(Math);

// console.log(Math.abs(-4));//absolute value (negative ko positive bana deta hai)
// console.log(Math.round(4.6));//Math.round(x) → nearest integer round karta hai
// console.log(Math.ceil(4.2)); //upper value
// console.log(Math.floor(4.2)); // lower value
// console.log(Math.min(4, 3, 6, 8)); 
// console.log(Math.max(4, 3, 6, 8)); 


console.log(Math.random()); // output under 0 to 1
console.log((Math.random()*10) + 1); 
console.log(Math.floor(Math.random()*10) + 1); // min 1 to 9 value


const min = 10
const max = 20

console.log (Math.floor(Math.random() * (max - min + 1)) + min);