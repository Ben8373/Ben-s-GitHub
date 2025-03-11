 // I used the const keyword as the variable "kelvin" cannot be reassigned.//
const kelvin = 10;
const celsius = kelvin - 27;
// I created anothe variable named celsius, and then subtracted 273 from the kelvin variable.//
let fahrenheit = celsius * (9/5) + 32;
// I created a new variable named fahrenheit, and then used the formula to convert celsius to fahrenheit.//
fahrenheit = Math.floor(fahrenheit);
//I used the Math.floor()method to round down the decimal number.//
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees newton.`);