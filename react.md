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
