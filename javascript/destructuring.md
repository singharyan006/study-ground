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
1. `Basic Example`: Assigning the variables the property names of the objects.

```js
let person = {
    name: "Aryan",
    age: 67,
    city: "JBL"
};

const {name, age, city} = person;

console.log(name); //Aryan
console.log(age);  //67
console.log(city); //JBL
```
--- 
2. Assigning new variable names
```js
const user = {
    userName: "arya.n",
    email: "ibfiab@ijbkj.com"
};

const { userName: username, email: userEmail} = user;
```
---

Similarly this goes on. The key point to remember here is what is destructuring; which is assigning the new varibles the existing variables or values of the props and this way extracting the data from `OBJECTS` and `ARRAYS`.


## Destructuring with the Rest Operator (...)

We can use rest operator (...) to collect remaining elements or properties into a new array or object.

1. Example with arrays
    ```js 
    const [first, ...rest] = [10, 20, 30, 40];
    console.log(first); // 10
    console.log(rest);  // [20, 30, 40]
    ```

2. Example with Objects

    ```js
    const { name, ...details } = { name: "Abhinav", age: 22, city: "Delhi" };
    console.log(name);    // Abhinav
    console.log(details); // { age: 22, city: "Delhi" }
    ```


---