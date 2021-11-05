let one = { name: "Keanu Reeves", age: 57, gender: 'male' };
let two = { name: "John", age: 2, gender: 'male' };
let three = { name: "吴彦祖", age: 47, gender: 'male' };

function copy(boy) {
    let duixiang = {}
    for (let i in boy) {
        duixiang[i] = boy[i];
    }
    return duixiang;
}

let obj1 = copy(one);
let obj2 = copy(two);
let obj3 = copy(three);

let arr = [];
arr.push(obj1, obj2, obj3);
console.table(arr);