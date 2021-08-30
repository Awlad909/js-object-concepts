// console.log(this);
const kibria = {
    id:101,
    money:4000,
    name:'RJ kibria',
    treatDeyArrow:()=>{
        console.log(this)
    },
    treatDeyInside: function(){
        const myArrow = () => console.log(this);
        myArrow();
    },
    treatDey:function(expense){
        this.money = this.money - expense;
        console.log(this)
        return this.money;
    }
}


function add(){
    console.log(this);
}