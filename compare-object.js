// const first = {a:1, b:2};
// const second = {a:1, b:2};
// const third = first;

// if(first===third){
//     // console.log('object are equal')
// }
// else{
//     // console.log('object are different')
// }

// // console.log(JSON.stringify(first))
// // console.log(JSON.stringify(second))
// const first2 = {a:1, b:2};
// const second2 = {b:2, a:1};
// if(JSON.stringify(first2) === JSON.stringify(second2)){
//     // console.log('object are equal')
// }

// function compareObject(obj1, obj2){
//     if(Object.keys(obj1).length !== Object.keys(obj2).length){
//         return false;
//     }
//     for(const prop in obj1){
//         if(obj1[prop] !== obj2[prop]){
//             return true;
//         }
//     }
//     return true;
// }

// const isEqual = compareObject(first2, second2);
// console.log(isEqual);

const first = {a:1, b:2, c:3};
const second = {b:2, a:1};
if(JSON.stringify(first) === JSON.stringify(second)){
    // console.log('object are equal')
}

function compareObject(obj1, obj2) {
    if(JSON.stringify(obj1.length) !== JSON.stringify(obj2.length)){
        return false
    }
    for(const prop in obj1){
        if(obj1[prop] !== obj2[prop]){
            return true;
        }
    }
    return true;
}
const isEqual = compareObject(first,second);
console.log(isEqual)