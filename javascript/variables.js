// ### Variables

// Now there are three ways to declare a varible, which are: 
// 1. Using keyword "var" (before 2016)
// 2. Using keyword "let"
// 3. Using keyword "const"


let a = 4; // block scoped
const x = 4; // block scoped
var n = 4; // Used before 2016 and is function scoped



console.log("------------------------------------------------------------");

// Ways to create a function
// 1. Using the function keyword
// 2. Using function expressions
// 3. Using arrow functions

function sum (i,j) {
    return a + b;
}

let product = function(k,l) {
    return k * l;
}

let div = (m,o) => {
    return m/o;
}


// There are rules for arrow functions
// 1. if there is one parameter and one statement definition of the function we can simply right is as

// let greet = name => console.log("Hello"+ name + "to JS World");
let greet = name => console.log(`Hello+ ${name} + to JS World`);
// (i.e. without parenthesis for the parameter and without curly brace definition can be written in a single line)