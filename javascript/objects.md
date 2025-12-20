# OBJECTS

## Definition
Objects in JS can be understood associating it with the dictionaries in python in terms of optics. Basically they are the key value pairs and the these pairs inside the objects are referred to as `properties` of the objects. 
for instance: 
```js
let user = {
    name: "Aryan"
    age: 67
    isStudent: "Ohhhell! yeah" //factually the value here should just be a true or false but bakchodi nhi rukni chahiye mittar 👍🏻
}
```

## Ways to access the properties in objects

There are two ways to access the properties of the objects
1. `Dot Notation`: Uses dots

```js
console.log(user.name); // Aryan
```
2. `Bracket Notation`: Uses brackets

```js
console.log(user["age"]); //67  heheheheheh🤧
```
---
### NOTES: CLARITY ON DOT AND BRACKET NOTATION

> `Dadaji ne kaha h`
> 1. Use dot notation when you know the property name beforehand. Use bracket notation when the property name is dynamic or stored in a variable.
> 2. What does dynamic mean here? It means which can change or is associated with some varible. for instance 

```js 
let key = "isStudent"
console.log(user[key]);
``` 


## Operations to perform on object properties
1. `MODIFY`: You can modify by accessing and assigning something new.
2. `ADD A NEW PROPERTY`: 
```js 
user.city = "marspur"
console.log(user.city)  // marspur
```
3. `DELETION`:
```js
delete user.city;
console.log(user) //sb hoga city nhi hoga
```

## Nested Objects 

Object k andar ek object
for instance: 
```js 
let user = {
    name: "Aryan"
    age: 67
    family: {
        fatherName: "Aryan k papa"
        motherName: "Aryan ki mum"
    }
};
```

### NOTES: CLARITY ON METHODS AND FUNCTION 
> `Dadaji ne kaha h`
> 1. Functions and methods are different. Functions are standalone whereas methods are associated with the objects. Now we are gonna look at it fam.

```js
let calculator = {
    add: function (a, b) {
        return a + b;
    }

    subtract: function (a, b) {
        return a - b;
    }
};

console.log(calculator.add(5, 6)); // 11
console.log(calculator.subtract(10, 5)); // 5
```


## Looping
```js 
for (let key in car) {
    console.log(key+ ":" + car[key]);
}
```

## Object Methods

There are several useful object methods which are very handy. 

- `Object.keys(obj)`: Returns an array of all keys in the object.
- `Object.values(obj)`: Returns an array of all values in the object.
- `Object.entries(obj)`: Returns an array of key–value pairs.
- `Object.assign(target,source)`: Copies properties from one object to another.
- `Object.freeze(obj)`: Prevents changes to the object.


```js 
let car = { brand: "Toyota", year: 2020 };

console.log(Object.keys(car));    // ["brand", "year"]
console.log(Object.values(car));  // ["Toyota", 2020]
console.log(Object.entries(car)); // [["brand", "Toyota"], ["year", 2020]]
```
---