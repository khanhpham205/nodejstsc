"use strict";
let number1 = 5;
let number2 = 2.8;
let phrase = 'Result is';
let permit = true;
const result_lab2_1 = number1 + number2;
if (permit) {
    console.log(phrase + result_lab2_1);
}
else {
    console.log('Not show result');
}
function add(x = 5) {
    let phrase = 'Result is';
    phrase = '10';
    x = 2.8;
    return phrase + x;
}
let result_lab2_2 = add();
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: 'Typescript',
    age: 11,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
    roletuple: [2, 'author']
};
if (person.role === Role.AUTHOR) {
    console.log('is author');
}
person.roletuple.push('admin');
person.roletuple[0] = 10;
function combine(input1, input2, resultconversion) {
    let result;
    if (typeof input1 == 'number' && typeof input2 == 'number' || resultconversion == 'as-number') {
        result = Number(input1) + Number(input2);
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combineNumber = combine(30, 26, 'as-number');
console.log(combineNumber);
const combineStringNumber = combine('30', '26', 'as-number');
console.log(combineStringNumber);
const combineText = combine('1111', 'dads', 'as-text');
console.log(combineText);
var a = null;
console.log(a);
console.log(typeof a);
var b;
console.log(b);
console.log(typeof b);
let userInput;
let userName;
userInput = 5;
userInput = "TypeScript";
if (typeof userInput === 'string') {
    userName = userInput;
}
console.log('userName');
let pros = [
    {
        id: 0,
        name: 'sp',
        cost: 999999,
        img: 'https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg'
    },
    {
        id: 1,
        name: 'sp1',
        cost: 999999,
        img: 'https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg'
    },
    {
        id: 2,
        name: 'sp2',
        cost: 999999,
        img: 'https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg'
    },
    {
        id: 3,
        name: 'sp3',
        cost: 999999,
        img: 'https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg'
    },
    {
        id: 4,
        name: 'sp4',
        cost: 999999,
        img: 'https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg'
    },
    {
        id: 5,
        name: 'sp5',
        cost: 999999,
        img: 'https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg'
    },
];
const box = document.querySelector('main');
function loadPdCard(product, box) {
    const div = document.createElement('div');
    const name = document.createElement('h3');
    const cost = document.createElement('p');
    const img = document.createElement('img');
    div.dataset.id_product = String(product.id);
    div.classList.add('product_card');
    img.src = product.img;
    name.innerText = product.name;
    cost.innerText = String(product.cost);
    div.append(img, name, cost);
    box.append(div);
}
pros.forEach(e => {
    loadPdCard(e, box);
});
