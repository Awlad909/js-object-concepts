const speaker = {
    color:'black',
    price:4000,
    sound:'clear',
    brand:'yoyo'
};
/* 
for(let i = 0; i<10; i++)
for(const num of numbers){} //array
for(const prop in student){} //object
*/
for(const prop in speaker){
    // console.log(prop,speaker[prop]);
}

const keys = Object.keys(speaker);
// console.log(keys);
for(const prop of keys){
    // console.log(prop,speaker[prop])
}
const entries = Object.entries(speaker);
// console.log(entries);
// const [key,value] = ['color', 'yellow'];
for(const [keys,value] of Object.entries(speaker)){
    console.log(keys,value)
}
