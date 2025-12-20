# Variables

Now there are three ways to declare a variable, which are:
1. Using keyword `var` (before 2016)
2. Using keyword `let`
3. Using keyword `const`

```javascript
let a = 4; // block scoped
const x = 4; // block scoped
var n = 4; // Used before 2016 and is function scoped
```

---

## Ways to create a function

1. Using the function keyword
2. Using function expressions
3. Using arrow functions

```javascript
function sum (i,j) {
    return a + b;
}

let product = function(k,l) {
    return k * l;
}

let div = (m,o) => {
    return m/o;
}
```

## Arrow Functions Rules

**Rule 1:** If there is one parameter and one statement definition of the function, we can simplify it without parenthesis for the parameter and without curly braces (can be written in a single line):

```js
let greet = name => console.log(`Hello+ ${name} + to JS World`);
```
---

> NOTES ABOUT NODE.JS
>  1. It's all about Node.js. We know in order to run the js codes outside the browser we use Node.js which basically is responsible for using V8 engine of browsers outside the browsers that's how it interprets the code in our computers.
> 2. That's why it's called that it provides the runtime environment for javascripts. The V8 engine is responisble for compiling the js lang using Just-In-Time (JIT) compiler which paces up the compilation.

---