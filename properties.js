const speaker = {
    color:'black',
    price:4000,
    sound:'clear',
    brand:'yoyo'
};
const keys = Object.keys(speaker);
const values = Object.values(speaker);
const pair = Object.entries(speaker);
// Object.freeze(speaker)
Object.seal(speaker)
speaker.price = 5000;
delete speaker.brand;
console.log(speaker);
// console.log(pair);
