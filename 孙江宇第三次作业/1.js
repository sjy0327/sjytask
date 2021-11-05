

// 第一种
let one = new Object();
one.name = '曹芬'
one.age = 20;
console.log(one);

// 第二种
let two = {
    name: '井川里予',
    age: 20
}
console.log(two);

// 第三种
function person() {
    this.name = '吴彦祖';
    this.age = 47;
}
console.log(person);

// 第四种
let obj = {
    name: 'Keanu Reeves',
    age: 57,
}
obj.性别 = '男';
console.log(obj);

// 第五种
let a = 'name'
let b = 2;
let c = {
    name: "性别"
}
let jack = new Object();
jack[a] = 'John';
jack[b] = 'test1'
jack[c] = '男'
console.log(jack);
