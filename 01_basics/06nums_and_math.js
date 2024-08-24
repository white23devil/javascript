// const score = 2343
// console.log(score)

// const balance = new Number(100)  //specially defined it as number
// console.log(balance)

// console.log(balance.toString().length);
// console.log(balance.toFixed(2))
// const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(3))
// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'))   // en-IN use for convert number to indian system

// +++++++++++++++++++++   MATHS    +++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-5))      //absolute
// console.log(Math.round(2.942)) 
// console.log(Math.ceil(2.142))    //jrha si uper value hui mei 3 hi luga
// console.log(Math.floor(2.932))

// console.log(Math.min(2,42,32,343))

console.log(Math.random())   //Math.random ki value hmesha 0-1 hi rhegi
console.log((Math.random()*10) +1) //guarntee hai ki 0 nhi aaeg kbhi

console.log(Math.floor(Math.random()*10) +1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min + 1))+ min )   //note
console.log(Math.floor(Math.random() * (max-min + 1))+ max )
console.log(Math.ceil(Math.random() * (max-min + 1))+ min )