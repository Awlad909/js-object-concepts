//object ar modde function call kora ke method bole abr sei function ar modde propery or value change kora zay or return kora zay.........
const student = {
    id:101,
    name:'Habu Mia',
    money:4000,
    major:'mathematics',
    subject:['english', 'math', 'physics', 'chemistry'],
    isRich:false,
    bestFriend:{
        name:'awlad',
        major:'Biological',
    },
    takeExam: function(){
        console.log(this.name,'taking exam')
    },
    treatDey:function(expense,boksis,gariVara){
        this.money = this.money - expense - boksis - gariVara;
        return this.money;
    }
}
kibria.takeExam();
const remaining = kibria.treatDey(1000,200,500);
console.log(remaining);