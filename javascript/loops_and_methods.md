# LOOPS

There are mainly two types of loops in JavaScript 
1. For loops (for, forEach, for...of)
2. While loops (while, do...while)

## For Loops

There are subdivisions under this category based on the control given to the user about the control of flow, index and other related things

1. for loop: It's like the basic for loop which we read in every other language where the index, the flow is all controlled by the user based on a given condition and it's merely a loop.

```js
myArray = [1, 2, 3, 4, 5];
for (var i = 0; i < myArray.length; i++) { 
    console.log(myArray[i])
}
```
--- 

2. forEach method: there's a reason to why it's called a method not simply a loop. Everything in here is controlled by the language itself (the index, the flow). The user just needs to define in the callback function, what operation he wants to be performed on each element this method returns


```js
var myArray = [1, 2, 3, 4, 5];
myArray.forEach(function(element){
    console.log(element);
})
```

---
> Note: There's a difference between functions and methods. Methods operate on affiliated objects whereas functions are stand alone. Like in the above code snippet, forEach is method therefore it's clearly visible `myArray.forEach()` not `forEach(element)`. 
---

3. for..of loop: You don't need to give the index it basically traverses through all the elements of the array. This here is not a method.

```js
myArray = [1, 2, 3, 4, 5];
for (var element of myArray) {
    console.log(element)
};
```
---- 

## While Loops 

Don't worry about it. It's same like in every other lang.

---

# METHODS

There are several methods in this lang ranging from: 
1. String methods
2. Array methods
3. Advanced methods



## String methods:
Bhai log naam hi kaafi h smjhne k liye plus methods hain so yk kya syntax hoga

```js
myArray.methodname(parameter if req))
```
1. length()
2. concat()
3. indexof()
4. slice()
5. replace() 
6. toUpperCase() & toLowerCase()
7. trim ()
8. split()

---

## Array methods: 

Mostly same as other languages. Naam hi kaafi h.

1. length
2. push()
3. pop()
4. shift() - `This method is used to remove the first element of an array. For example, the following code will remove the first element (1) from the array`
5. unshift() - `This method is used to add an element to the beginning of an array. For example, the following code will add the element 0 to the beginning of the array`

6. slice()
```js
var myArray = [1, "Hello", [2, 3]];
console.log(myArray.slice(1, 2)); // ["Hello"]
```
7. splice()
```js
var myArray = [1, "Hello", [2, 3]];
myArray.splice(1, 1, "Hello World", [4, 5]);
console.log(myArray); // [1, "Hello World", [4, 5], [2, 3]]
```
---

## Advanced methods

1. map(): Creates a new array changing every existing element as per the given condition or statement. It needs a call back function inside it to know what to do with every element of the array it fetches just like forEach method.

```js
var myArray = [1, 2, 3, 4, 5]
var mulArray = myArray.map(function(element) {
    return element * 2;
});
console.log(mulArray);
```
--- 

2. filter(): Based on the condtion it filters out the current elements and performs the given operation on it and creates a new array with the results.
This also requires callback function inside of it.

```js
var myArray = [1, 2, 3, 4, 5]
var newArray = myArray.filter(function(element) {
    return element % 2 == 0;
})
```

---

3. reduce(): Based on the given condition, pure k pure array ko concise kr deta h. Again, this also needs a callback functions inside. It takes two parameters accumulator(acc) and current(cur). That 0 in the end is the declaration of initial value of accumulator.

```js
var myArray = [1, 2, 3, 4, 5];
var sum = myArray.reduce(function(acc, cur){
    return acc + cur;
}, 0);

console.log.(sum)
```

---