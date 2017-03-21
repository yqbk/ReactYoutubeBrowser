# React and Redux

## React

- `import react from 'react'` ceating and nesting react components
- `import reactDOM from 'react-dom'` put component into DOM

```
const App = function() {
  return <div> Hi! </div>
}
```
App is a class, not an instance of a class. Need instance for render:
```ReactDOM.render(<App />);```


Put instance of component into a target location in the existing page 
```ReactDOM.render(<App />, document.querySelector('.container'));```

### Arrow function `() => { }`
pointer to `this` is pointing at outer scope **not** at the current function

### One component per file!


## Exports

We need to export component to make it available to import by another component.


## Class [ES6]


```
import React, { Component } from 'react';
```
Using `{ Component }` in import means using `React.Component`

----

```
class SearchBar extends Component
```

Our class implements functionality of React component. It means that it has:

1. ` constructor `

For creating instance of class we use constructor.

Using ` super() ` with predefinied ` props ` prepare some properties for currently created object.


We can also initialize our object be setting its initial state:
``` 
this.state = { smth: '' } 
```

### NEVER CHANGE VALUE OF THE STATE DIRECTLY (outside constructor)!!!

2. ` render() { return <div /> } `

We need to implement `render` method that definies the way our component is "presented" on web page.

## Arrays

Iterate through an array by build-in iterators like map or reduce. 

React is intelligent enaught to detect, that component to render is a list. If included in ```<ul>``` tag, generate list automatically.

### Array keys

When we do not provide unique key for each item in array we will get an error:
```
Each child in an array should have a unique "key" prop.
```


