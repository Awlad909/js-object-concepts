const kibria = {
    id:101,
    money:4000,
    name:'RJ kibria',
    treatDey:function(expense,boksis,tax){
        this.money = this.money - expense - boksis - tax;
        console.log(this)
        return this.money;
    }
}
const heroBalam = {
    id:102,
    money:5000,
    name:'Hero Balam'
}
const normalGolam = {
    id:102,
    money:6000,
    name:'Normal Golam'
}
//call
kibria.treatDey.call(heroBalam,500,300,100);
kibria.treatDey.call(heroBalam,500,200,50);

kibria.treatDey.apply(heroBalam,[500,100,50]);
kibria.treatDey.apply(heroBalam,[1000,200,100]);


kibria.treatDey.apply(normalGolam,[400,80,30]);