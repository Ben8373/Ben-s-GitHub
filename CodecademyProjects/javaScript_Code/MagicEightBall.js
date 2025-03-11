let userName = `Charlie`;

userName ? console.log(`Hello, ${userName}!`) : console.log(`Hello!`);

const userQuestion = `Will I become rich soon?`;

console.log(`${userName} has asked - ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

console.log(randomNumber);

let eightBall = ``;

if (randomNumber === 0) {
 eightBall = `It is certain.`;
 }
if (randomNumber === 1){
eightBall = `It is decidedly so.`;
}
if (randomNumber === 2) {
eighBall = `Reply hazy try again.`;
}
if (randomNumber === 3) {
 eightBall = `Cannot predict now.`;
}
if (randomNumber === 4) {
 eightBall = `Do not count on it.`;
}
if (randomNumber === 5) {
 eightBall = `My sources say no.`;
}
if (randomNumber === 6) {
 eightBall = `Outlook not so good.`;
}
if (randomNumber === 7) {
 eightBall = `Signs point to yes`;
}
console.log(`The magic 8 ball says, ${eightBall}`)
