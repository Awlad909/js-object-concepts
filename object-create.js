//1. using object literal
const kibria = {name:'shakib al hasan', job:'cricketer'};
//2. constructor
const person = new Object();
console.log(person); 

// 3. object
// const human = Object.create(null)
const human = Object.create(kibria);
// console.log(human.job)


//4. class----sintractic sugar
class People{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}
const peop = new People('Manus', 12);
// console.log(peop);


//5. function
function Manus(name){
    this.name = name;
}
const man = new Manus('kader');
console.log(man);