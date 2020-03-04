// 1. Function Statement
function sum(x:number, y:number=0) : number{
    return x + y;
}
sum(3,4);
sum(5);
// sum("a","b");

// 2. Function Expression
const add = function (x: number, y: number):number {
    return x + y;
}
add (6,7);

// 3. Arrow Functions - shorthand version Function Expression

const addNumbers = (x: number, y:number = 0)=> {
    return x+y;
}

addNumbers(8,9)


const addNumber = (x: number, y:number = 0)=> x+y;

const cube= n => n*n*n;

