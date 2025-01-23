let number1: number = 5;
let number2: number = 2.8;
let phrase: string = 'Result is';
let permit: boolean = true;

const result_lab2_1 = number1 + number2;
if(permit)
{
    console.log(phrase + result_lab2_1);
}
else
{
    console.log('Not show result');
}

function add(x = 5){
    let phrase = 'Result is';
    phrase = '10';
    x = 2.8;
     return phrase + x;
    }
let result_lab2_2: string = add();

enum Role { ADMIN, READ_ONLY, AUTHOR }

type Person = {
    name: string,
    age: number,
    hobbies: string[],
    role: string | number,
    roletuple: [number,string]
} 

const person :Person = {
    name: 'Typescript',
    age: 11,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN,
    roletuple: [2, 'author'] as [number, string]
};


if (person.role === Role.AUTHOR) {
    console.log('is author');
}


person.roletuple.push('admin'); 
person.roletuple[0] = 10;

type Combiable = Number| String;

function combine(input1 :Combiable, input2:Number|String, resultconversion: 'as-number'|'as-text' ){
    let result;
    if(typeof input1 =='number' && typeof input2 =='number' || resultconversion=='as-number' ){
        result = Number(input1) + Number(input2);
    }else{
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


let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "TypeScript";

if (typeof userInput === 'string') {
    userName = userInput; 
}

console.log('userName');



type product ={
    id:number,
    name:string,
    cost:number,
    img:string
}
let pros:product[] = [
    {
        id:0,
        name:'sp',
        cost:999999,
        img:'https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg'
    },
    {
        id:1,
        name:'sp1',
        cost:999999,
        img:'https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg'
    },
    {
        id:2,
        name:'sp2',
        cost:999999,
        img:'https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg'
    },
    {
        id:3,
        name:'sp3',
        cost:999999,
        img:'https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg'
    },
    {
        id:4,
        name:'sp4',
        cost:999999,
        img:'https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg'
    },
    {
        id:5,
        name:'sp5',
        cost:999999,
        img:'https://mtek3d.com/wp-content/uploads/2018/01/image-placeholder-500x500.jpg'
    },
]

const box = document.querySelector('main');

function loadPdCard(product:product,box :HTMLElement):void{
    const div  = document.createElement('div'); 
    const name = document.createElement('h3'); 
    const cost = document.createElement('p'); 
    const img  = document.createElement('img'); 

    div.dataset.id_product = String(product.id);
    div.classList.add('product','card');

    img.src = product.img;
    name.innerText = product.name;
    cost.innerText = String(product.cost);


    div.append(img,name,cost);
    box.append(div);
}

pros.forEach(e=>{
    loadPdCard(e,box as HTMLElement);
})
