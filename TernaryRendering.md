# TERNARY OPERATOR
It is used for conditional rendering in the following code:
```
import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  let food=["apple", "egg", "chicken"]

  // let food=[]
  let emptyMessage=food.length===0? <h1>I am Hungry</h1>: null
  
  return (
    <Fragment>
      <h1>Healthy shit</h1>

      {/* Ternary with one JSX ele */}
      {emptyMessage} 
      <ul className="list-group">

        {/* Ternary with multiple JSX ele */}
        {food.map((item)=>(
          <Fragment>
            {
              item==="egg"? (<li key={item} className="list-group-item">Egg is smelly</li>): 
              item==="apple" ? (<li key={item} className="list-group-item">Apple a day keeps the doc away</li>) :
              (<li key={item} className="list-group-item">{item} </li>)
            }
          </Fragment>
        ))}

      </ul>
    </Fragment>
  ) 
}

export default App;

```

# Explanation of Ternary Conditional Rendering in the Code

In this code, the **ternary operator** is used for conditional rendering of JSX elements based on the value of the `item` in the `food` array. Let’s break it down step by step:

---

## 1. Outer Conditional Check (Food Array Empty Check):

```jsx
{food.length === 0 ? <h1>I am Hungry</h1> : null}
```

### Explanation:
- **Condition**: `food.length === 0`
  - If `food` array is empty (`length === 0`), it renders `<h1>I am Hungry</h1>`.
  - If not, it renders nothing (`null`).

### Purpose:
- Provides a message when the list is empty.

---

## 2. Mapping Through the Food Array:

```jsx
{food.map((item) => (
  <Fragment>
    {
      item === "egg" ? (<li>Egg is smelly</li>) : 
      item === "apple" ? (<li>Apple a day keeps the doc away</li>) :
      (<li key={item} className="list-group-item">{item} </li>)
    }
  </Fragment>
))}
```

### Explanation:
- The `map` method loops through each `item` in the `food` array.
- The ternary logic is applied to render different content based on the value of `item`.

---

## 3. Ternary Operator for Rendering Different `<li>` Elements:

```jsx
item === "egg" ? (<li>Egg is smelly</li>) :
item === "apple" ? (<li>Apple a day keeps the doc away</li>) :
(<li key={item} className="list-group-item">{item} </li>)
```

### Nested Conditions:
1. **First Condition**:
   ```jsx
   item === "egg" ? (<li>Egg is smelly</li>)
   ```
   - If the current `item` is `"egg"`, it renders:
     ```jsx
     <li>Egg is smelly</li>
     ```

2. **Second Condition**:
   ```jsx
   item === "apple" ? (<li>Apple a day keeps the doc away</li>)
   ```
   - If the current `item` is `"apple"`, it renders:
     ```jsx
     <li>Apple a day keeps the doc away</li>
     ```

3. **Default Case (Else)**:
   ```jsx
   (<li key={item} className="list-group-item">{item} </li>)
   ```
   - If the `item` is neither `"egg"` nor `"apple"`, it renders:
     ```jsx
     <li key={item} className="list-group-item">{item}</li>
     ```

### Purpose of `key`:
- Each `<li>` must have a unique `key` for React to track and update the DOM efficiently during re-renders.

---

## 4. Purpose of `<Fragment>`:

```jsx
<Fragment>
  ...
</Fragment>
```

### Explanation:
- React requires a single parent container when returning multiple JSX elements from a `map`.
- `<Fragment>` serves as a lightweight wrapper that does not add an extra node to the DOM (unlike `<div>`).

---

## Overall Logic:
- The ternary operator ensures different `<li>` elements are rendered based on the value of `item` in the `food` array.
- It allows for **dynamic conditional rendering** in a concise and readable manner.

---

## Example Execution:

Given:

```js
let food = ["apple", "egg", "chicken"];
```

The rendered output will be:

```html
<h1>Healthy shit</h1>
<ul class="list-group">
  <li>Apple a day keeps the doc away</li>
  <li>Egg is smelly</li>
  <li class="list-group-item">chicken</li>
</ul>
```

---

## Why This Code is Effective:

1. **Dynamic Logic**:
   - Handles multiple cases (`"apple"`, `"egg"`, and others) dynamically.

2. **Readability**:
   - The ternary operator keeps the conditional rendering concise and easy to understand.

3. **Efficiency**:
   - React's `<Fragment>` and `key` ensure optimal DOM updates without unnecessary wrappers.
