# DOM (Document Object Model)

## Definition
DOM is basically a programming interface for HTML and XML documents. Think of it as a tree structure representation of your HTML page that JavaScript can interact with. Each element in your HTML becomes a node in this tree, and you can manipulate these nodes using JavaScript.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1 id="heading">Hello World</h1>
    <p class="text">This is a paragraph</p>
  </body>
</html>
```

---

## Selecting Elements

There are multiple ways to select elements from the DOM:

### 1. `getElementById()`
Selects an element by its ID (returns a single element)

```js
let heading = document.getElementById("heading");
console.log(heading); // <h1 id="heading">Hello World</h1>
```

### 2. `getElementsByClassName()`
Selects all elements with a specific class (returns HTMLCollection)

```js
let texts = document.getElementsByClassName("text");
console.log(texts[0]); // First element with class "text"
```

### 3. `getElementsByTagName()`
Selects all elements with a specific tag name (returns HTMLCollection)

```js
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs); // All <p> elements
```

### 4. `querySelector()`
Selects the FIRST element that matches a CSS selector

```js
### 4. `querySelector()`
Selects the FIRST element that matches a CSS selector

```js
let heading = document.querySelector("#heading"); // By ID
let text = document.querySelector(".text"); // By class
let firstP = document.querySelector("p"); // By tag
```

### 5. `querySelectorAll()`
Selects ALL elements that match a CSS selector (returns NodeList)

```js
let allTexts = document.querySelectorAll(".text");
allTexts.forEach(element => {
    console.log(element);
});
```

---

> `Dadaji ne kaha h`
> 1. `querySelector` and `querySelectorAll` are more modern and flexible. Use them whenever possible because they support all CSS selectors.
> 2. `getElementById` is faster than querySelector for ID selection, but the performance difference is negligible in most cases.
> 3. HTMLCollection is LIVE (updates automatically), NodeList from querySelectorAll is STATIC (doesn't update)

---

## Modifying Elements

### Changing Content

1. `innerHTML`: Gets/sets HTML content inside an element

```js
let heading = document.getElementById("heading");
heading.innerHTML = "<strong>New Bold Heading</strong>";
```

2. `textContent`: Gets/sets text content (ignores HTML tags)

```js
let heading = document.getElementById("heading");
heading.textContent = "New Plain Text"; // HTML tags won't work here
```

3. `innerText`: Similar to textContent but respects CSS styling

```js
heading.innerText = "Visible Text Only";
```

---

### Changing Attributes

```js
let link = document.querySelector("a");

// Get attribute
console.log(link.getAttribute("href"));

// Set attribute
link.setAttribute("href", "https://google.com");

// Remove attribute
link.removeAttribute("target");

// Direct property access (modern way)
link.href = "https://github.com";
```

---

### Changing Styles

```js
let box = document.querySelector(".box");

// Inline styles
box.style.color = "red";
box.style.backgroundColor = "yellow"; // Note: camelCase for CSS properties
box.style.fontSize = "20px";

// Add/Remove classes (better practice)
box.classList.add("active");
box.classList.remove("hidden");
box.classList.toggle("dark-mode"); // Adds if not present, removes if present
box.classList.contains("active"); // Check if class exists (returns true/false)
```

---

---

## Modifying Elements

### Changing Content

1. `innerHTML`: Gets/sets HTML content inside an element

```js
let heading = document.getElementById("heading");
heading.innerHTML = "<strong>New Bold Heading</strong>";
```

2. `textContent`: Gets/sets text content (ignores HTML tags)

```js
let heading = document.getElementById("heading");
heading.textContent = "New Plain Text"; // HTML tags won't work here
```

3. `innerText`: Similar to textContent but respects CSS styling

```js
heading.innerText = "Visible Text Only";
```

---

### Changing Attributes

```js
let link = document.querySelector("a");

// Get attribute
console.log(link.getAttribute("href"));

// Set attribute
link.setAttribute("href", "https://google.com");

// Remove attribute
link.removeAttribute("target");

// Direct property access (modern way)
link.href = "https://github.com";
```

---

### Changing Styles

```js
let box = document.querySelector(".box");

// Inline styles
box.style.color = "red";
box.style.backgroundColor = "yellow"; // Note: camelCase for CSS properties
box.style.fontSize = "20px";

// Add/Remove classes (better practice)
box.classList.add("active");
box.classList.remove("hidden");
box.classList.toggle("dark-mode"); // Adds if not present, removes if present
box.classList.contains("active"); // Check if class exists (returns true/false)
```

---

## Creating and Adding Elements

### Creating New Elements

```js
// Create element
let newDiv = document.createElement("div");
newDiv.textContent = "I am new here!";
newDiv.className = "new-box";

// Create text node
let textNode = document.createTextNode("Just some text");
```

### Adding Elements to DOM

```js
let container = document.querySelector(".container");

// appendChild: Adds at the end
container.appendChild(newDiv);

// append: Can add multiple elements and text
container.append(newDiv, "Some text", anotherElement);

// prepend: Adds at the beginning
container.prepend(newDiv);

// insertBefore: Insert before a specific element
let referenceElement = document.querySelector(".reference");
container.insertBefore(newDiv, referenceElement);
```

---

## Removing Elements

```js
let element = document.querySelector(".remove-me");

// Modern way
element.remove();

// Old way (still works)
element.parentNode.removeChild(element);
```

---

## Event Handling

Events are actions that happen in the browser (clicks, key presses, mouse movements, etc.)

### Adding Event Listeners

```js
let button = document.querySelector("button");

// Method 1: addEventListener (recommended)
button.addEventListener("click", function() {
    console.log("Button clicked!");
});

// Method 2: onclick property
button.onclick = function() {
    console.log("Button clicked!");
};

// Method 3: With arrow function
button.addEventListener("click", () => {
    console.log("Button clicked with arrow function!");
});
```

### Common Events

```js
// Click event
element.addEventListener("click", handleClick);

// Mouse events
element.addEventListener("mouseover", handleMouseOver);
element.addEventListener("mouseout", handleMouseOut);

// Keyboard events
document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

// Form events
form.addEventListener("submit", handleSubmit);
input.addEventListener("input", handleInput); // Fires on every keystroke
input.addEventListener("change", handleChange); // Fires when input loses focus
```

### Event Object

```js
button.addEventListener("click", function(event) {
    console.log(event.type); // "click"
    console.log(event.target); // Element that triggered the event
    event.preventDefault(); // Prevent default behavior
    event.stopPropagation(); // Stop event bubbling
});
```

---

## DOM Traversal

Moving around the DOM tree from one element to another

```js
let element = document.querySelector(".child");

// Parent
console.log(element.parentElement); // Direct parent
console.log(element.parentNode); // Can be any node type

// Children
console.log(element.children); // All child elements
console.log(element.firstElementChild); // First child element
console.log(element.lastElementChild); // Last child element

// Siblings
console.log(element.nextElementSibling); // Next sibling element
console.log(element.previousElementSibling); // Previous sibling element
```

---

> `Dadaji ne kaha h`
> 1. Always check if an element exists before manipulating it to avoid errors
> 2. Use `addEventListener` instead of `onclick` because you can attach multiple listeners
> 3. Practice event delegation for better performance when dealing with many elements

---

# BOM (Browser Object Model)

## Definition
BOM represents everything the browser provides outside of the document. It includes the window object and all its properties and methods that allow you to interact with the browser itself (not just the page content).

---

## Window Object

The `window` object is the global object in browser JavaScript. Everything is inside it.

```js
console.log(window); // The entire browser window object

// These are all the same (window is global)
window.console.log("Hello");
console.log("Hello");

window.alert("Hi!");
alert("Hi!");
```

---

## Window Properties

### Window Dimensions

```js
// Inner dimensions (excluding browser UI)
console.log(window.innerWidth); // Width of viewport
console.log(window.innerHeight); // Height of viewport

// Outer dimensions (including browser UI)
console.log(window.outerWidth);
console.log(window.outerHeight);
```

### Screen Information

```js
console.log(screen.width); // Total screen width
console.log(screen.height); // Total screen height
console.log(screen.availWidth); // Available width (excluding taskbar)
console.log(screen.availHeight); // Available height
```

---

## Window Methods

### Alert, Confirm, Prompt

```js
// Alert: Shows a message
window.alert("This is an alert!");

// Confirm: Shows yes/no dialog (returns true/false)
let result = window.confirm("Are you sure?");
if (result) {
    console.log("User clicked OK");
} else {
    console.log("User clicked Cancel");
}

// Prompt: Gets user input (returns string or null)
let name = window.prompt("What's your name?", "Default Name");
console.log(name);
```

### Opening and Closing Windows

```js
// Open new window
let newWindow = window.open("https://google.com", "_blank", "width=500,height=400");

// Close window (only works for windows opened by script)
newWindow.close();
```

### Scrolling

```js
// Scroll to specific position
window.scrollTo(0, 500); // x, y coordinates

// Scroll by amount
window.scrollBy(0, 100); // Scroll down 100px

// Smooth scrolling
window.scrollTo({
    top: 500,
    behavior: "smooth"
});
```

---

---

## Window Properties

### Window Dimensions

```js
// Inner dimensions (excluding browser UI)
console.log(window.innerWidth); // Width of viewport
console.log(window.innerHeight); // Height of viewport

// Outer dimensions (including browser UI)
console.log(window.outerWidth);
console.log(window.outerHeight);
```

### Screen Information

```js
console.log(screen.width); // Total screen width
console.log(screen.height); // Total screen height
console.log(screen.availWidth); // Available width (excluding taskbar)
console.log(screen.availHeight); // Available height
```

---

## Window Methods

### Alert, Confirm, Prompt

```js
// Alert: Shows a message
window.alert("This is an alert!");

// Confirm: Shows yes/no dialog (returns true/false)
let result = window.confirm("Are you sure?");
if (result) {
    console.log("User clicked OK");
} else {
    console.log("User clicked Cancel");
}

// Prompt: Gets user input (returns string or null)
let name = window.prompt("What's your name?", "Default Name");
console.log(name);
```

### Opening and Closing Windows

```js
// Open new window
let newWindow = window.open("https://google.com", "_blank", "width=500,height=400");

// Close window (only works for windows opened by script)
newWindow.close();
```

### Scrolling

```js
// Scroll to specific position
window.scrollTo(0, 500); // x, y coordinates

// Scroll by amount
window.scrollBy(0, 100); // Scroll down 100px

// Smooth scrolling
window.scrollTo({
    top: 500,
    behavior: "smooth"
});
```

---

## Location Object

Represents the URL of the current page

```js
console.log(location.href); // Full URL
console.log(location.protocol); // http: or https:
console.log(location.host); // Domain + port
console.log(location.hostname); // Just domain
console.log(location.port); // Port number
console.log(location.pathname); // Path after domain
console.log(location.search); // Query string (?key=value)
console.log(location.hash); // Hash (#section)

// Navigate to new URL
location.href = "https://google.com";

// Reload page
location.reload();

// Replace current page (doesn't create history entry)
location.replace("https://google.com");
```

---

## History Object

Controls browser's session history

```js
// Go back
history.back();

// Go forward
history.forward();

// Go to specific page in history
history.go(-2); // Go back 2 pages
history.go(1); // Go forward 1 page

// Number of pages in history
console.log(history.length);
```

---

## Navigator Object

Information about the browser

```js
console.log(navigator.userAgent); // Browser info string
console.log(navigator.language); // User's preferred language
console.log(navigator.platform); // Operating system
console.log(navigator.onLine); // true if online, false if offline
console.log(navigator.cookieEnabled); // true if cookies enabled

// Geolocation API
navigator.geolocation.getCurrentPosition(function(position) {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
});
```

---

## Timing Functions

### setTimeout
Executes code once after a delay

```js
// Basic usage
setTimeout(function() {
    console.log("This runs after 2 seconds");
}, 2000);

// With arrow function
let timeoutId = setTimeout(() => {
    console.log("Delayed message");
}, 3000);

// Cancel timeout
clearTimeout(timeoutId);
```

### setInterval
Executes code repeatedly at intervals

```js
// Basic usage
let counter = 0;
let intervalId = setInterval(function() {
    counter++;
    console.log("Counter: " + counter);
    
    if (counter === 5) {
        clearInterval(intervalId); // Stop after 5 times
    }
}, 1000); // Every 1 second

// Cancel interval
clearInterval(intervalId);
```

---

## Local Storage & Session Storage

Store data in the browser (persists even after closing browser)

### localStorage (persists forever)

```js
// Set item
localStorage.setItem("username", "Aryan");
localStorage.setItem("age", "25");

// Get item
let username = localStorage.getItem("username");
console.log(username); // "Aryan"

// Remove item
localStorage.removeItem("age");

// Clear all
localStorage.clear();

// Store objects (need to stringify)
let user = { name: "Aryan", age: 25 };
localStorage.setItem("user", JSON.stringify(user));

// Retrieve objects (need to parse)
let retrievedUser = JSON.parse(localStorage.getItem("user"));
console.log(retrievedUser.name); // "Aryan"
```

### sessionStorage (cleared when tab closes)

```js
// Same API as localStorage but data is session-specific
sessionStorage.setItem("tempData", "This will be cleared");
let data = sessionStorage.getItem("tempData");
sessionStorage.removeItem("tempData");
sessionStorage.clear();
```

---

> `Dadaji ne kaha h`
> 1. localStorage has a limit of about 5-10MB depending on the browser
> 2. Both localStorage and sessionStorage can only store strings, so use JSON.stringify/parse for objects
> 3. Always wrap localStorage operations in try-catch because it can fail if storage is full or disabled
> 4. Use sessionStorage for sensitive data that shouldn't persist

---

## Cookies

Small pieces of data stored in the browser (sent with every HTTP request)

```js
// Set cookie
document.cookie = "username=Aryan";
document.cookie = "age=25; expires=Fri, 31 Dec 2025 23:59:59 GMT";
document.cookie = "token=abc123; path=/; secure; samesite=strict";

// Get all cookies (returns string)
console.log(document.cookie); // "username=Aryan; age=25; token=abc123"

// Delete cookie (set expiry to past date)
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
```

---

> Note: Working with cookies directly is tedious. Consider using libraries or the more modern localStorage/sessionStorage APIs for client-side storage.

---

// Get all cookies (returns string)
console.log(document.cookie); // "username=Aryan; age=25; token=abc123"

// Delete cookie (set expiry to past date)
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
```

---

> Note: Working with cookies directly is tedious. Consider using libraries or the more modern localStorage/sessionStorage APIs for client-side storage.

---

## Practical Example: Complete Mini-Project

```html
<!DOCTYPE html>
<html>
<head>
    <title>DOM & BOM Demo</title>
    <style>
        .box { 
            padding: 20px; 
            margin: 10px; 
            background: lightblue; 
        }
        .active { border: 3px solid red; }
    </style>
</head>
<body>
    <h1 id="title">DOM & BOM Practice</h1>
    <input type="text" id="nameInput" placeholder="Enter your name">
    <button id="saveBtn">Save Name</button>
    <button id="loadBtn">Load Name</button>
    <div id="output"></div>
    
    <script>
        // DOM Manipulation
        let title = document.getElementById("title");
        let input = document.getElementById("nameInput");
        let saveBtn = document.getElementById("saveBtn");
        let loadBtn = document.getElementById("loadBtn");
        let output = document.getElementById("output");
        
        // Save to localStorage
        saveBtn.addEventListener("click", function() {
            let name = input.value;
            localStorage.setItem("savedName", name);
            alert("Name saved!");
        });
        
        // Load from localStorage
        loadBtn.addEventListener("click", function() {
            let savedName = localStorage.getItem("savedName");
            if (savedName) {
                output.textContent = "Saved Name: " + savedName;
            } else {
                output.textContent = "No name saved yet!";
            }
        });
        
        // Auto-load on page load
        window.addEventListener("load", function() {
            let savedName = localStorage.getItem("savedName");
            if (savedName) {
                input.value = savedName;
            }
        });
    </script>
</body>
</html>
```

---

**That's it fam! Kuchh jyada hi lmba hogya but you're now ready to manipulate DOM like a pro and use BOM features effectively!**