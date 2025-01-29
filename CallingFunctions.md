# THIS PRINTS ITEM EVERY TIME TEH APP IS RENDERED, EVEN WITHOUT CLICKING THE BUTTON
```
import React from 'react'

const Button = ({num}) => {
  return (
    <div class="grid  grid-cols-4 gap-4 mt-3 text-center">
          {num.map((item)=>(
            <button className="border-1 bg-white p-1 text-xl"
            onClick={console.log({item})}>
                {item}
            </button>
          ))}
          
    </div>
  )
}

 export default Button
```
## Understanding `console.log(item)` with Functions in React

In React, wrapping `console.log(item)` in a function helps prevent it from being executed immediately during the render process. Instead, the function is executed only when it is called, which is essential for controlling when actions happen in response to user interactions.

## Without a Function (Problem)

When you write:

```jsx
<button onClick={console.log(item)}>Click Me</button>
```

- `console.log(item)` is executed immediately during rendering because it is not wrapped in a function.
- The `onClick` attribute expects a function, but `console.log(item)` is just an expression that gets evaluated immediately and the result of that evaluation is assigned to `onClick`.
- As a result, `console.log(item)` runs on every render cycle, not when the button is clicked.

## With a Function (Fix)

When you write:

```jsx
<button onClick={() => console.log(item)}>Click Me</button>
```

- `console.log(item)` is inside a function (an arrow function here).
- The arrow function `() => console.log(item)` is **not executed immediately**. Instead, it is passed to `onClick` as a callback function.
- This callback function is invoked only when the button is clicked, ensuring that `console.log(item)` is only called when the click event happens, not during the render.

## Why Does This Matter?

React evaluates everything during rendering. Without the function wrapper, `console.log(item)` would execute on every render cycle, flooding the console with logs. By wrapping it in a function, you ensure that it only runs when the user clicks the button, not before.

## To Summarize:

- **Without a function**: `console.log(item)` is executed immediately during render.
- **With a function**: The callback function is invoked only when the button is clicked.

---
# TO FIX THIS PROB
```
import React from 'react'

const Button = ({num}) => {
  return (
    <div class="grid  grid-cols-4 gap-4 mt-3 text-center">
          {num.map((item)=>(
            <button className="border-1 bg-white p-1 text-xl"
            onClick={()=>console.log({item})}>
                {item}
            </button>
          ))}
          
    </div>
  )
}

 export default Button
```
