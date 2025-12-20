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

