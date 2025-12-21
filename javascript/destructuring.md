# DESTRUCTURING

A short and beautiful way of extracting the data from the arrays and objects into individual variables.

```js 
let myArray = [1, 3, 5]
let a = myArray[0];
let b = myArray[1];
let c = myArray[2];

console.log(a, b, c);
```

The thing above could be also done as:
```js 
let [a, b, c] = [1, 3, 5];

console.log(a, b, c);
```
## Usecases
1. There are several usecases like below given is a `basic example`.

```js
let people = ["A", "B", "C"];
let ['a', 'b', 'c'] = people;

console.log(a,b,c)
```

2. `Skipping`: Too simple, jo skip krna h uske jgh khali " " chhod do, that's it

3. `Default Values`: put an = sign and then assign one value to the index
```js
let fruits = ["apple"]
let [first, second = "banana"] = fruits;

console.log(first, second); // Output: apple banana
```

4. `swapping`: Just do this 

```js 
let x = 1
let y = 2

[x, y] = [y, x];
console.log(x, y);
```
## OBJECT DESTRUCTURING
