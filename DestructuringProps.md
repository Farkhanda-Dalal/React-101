## Destructuring an Object:
- When you pass props to a component, it's an object that contains all the properties you passed to it.
- let { foodItem } = props extracts the foodItem property from the props object and assigns its value to the variable foodItem.
- The variable name must match the property name in the props object because destructuring relies on property names, not indices.

```
const props = { foodItem: "apple", price: 10 };
let { foodItem } = props;
console.log(foodItem); // Output: "apple"
```

## Example:
App.jsx:
```
import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import EmptyMessage from './components/EmptyMessage'

const App = () => {

  let food=[]
  return (
    <Fragment>
      <h1>Healthy Food</h1>
      <EmptyMessage foodList={food}></EmptyMessage>
    </Fragment>
  ) 
}

export default App;
```
---
EmptyMessage.jsx
```
const EmptyMessage =(props)=>{
    let {foodList}=props
    let message= foodList.length===0 && <h1>Im actually Hungry</h1>

    return <>
    {message}
    </>
}

export default EmptyMessage
```

## Understanding Destructuring in `EmptyMessage.jsx`

### 1. Destructuring in `EmptyMessage.jsx`

```jsx
let { foodList } = props;
```

**How it works:**

When `EmptyMessage` is called as a component in `App.jsx`, it receives `props` as an object.

In `App.jsx`, the component is called with:

```jsx
<EmptyMessage foodList={food} />
```

This means the `props` object looks like this:

```js
const props = { foodList: [] };
```

The line:

```js
let { foodList } = props;
```

Extracts the value of the `foodList` property (`[]`) from `props` and assigns it to the variable `foodList`.

**Purpose:**

Instead of accessing `props.foodList` repeatedly, you can directly work with `foodList` after destructuring, making the code cleaner and more readable.

---

### 2. Does the Variable Name Need to Match the Property Name?

**Yes**, the variable name `foodList` in:

```js
let { foodList } = props;
```

must match the property name `foodList` in the `props` object.

**Why?**

Destructuring for objects works by matching property names, not indices or any other method. The key in the object (`foodList`) must match the variable name (`foodList`) in the destructuring statement.

**What happens if it doesn't match?**

If you use a different name, such as:

```js
let { list } = props;
```

JavaScript will look for a `list` property in `props`. Since `props` does not have a `list` property, the variable will be `undefined`.

---
## 4. Can You Rename the Variable?
Yes, you can rename the variable during destructuring using the : syntax.

```
let { foodList: food } = props;
```

Here: </br>
foodList is the property in props. </br>
food is the new variable name that holds the value of props.foodList. </br>

Usage: After renaming, you would use food in the rest of the code instead of foodList:
```
let message = food.length === 0 && <h1>I'm actually Hungry</h1>;
```
---
## 5. Destructuring in function arguement:
Instead of removing the foodList from props into a variable it can be directly be destructured in the function arguement itself.
```
const EmptyMessage =({foodList})=>{
    let message= foodList.length===0 && <h1>Im actually Hungry</h1>

    return <>
    {message}
    </>
}
export default EmptyMessage
```
---
## 6. Renaming while Destructuring in function arguement:
Here, foodList is renamed to food in the function arguement itself
```
const EmptyMessage =({foodList:food})=>{
    let message= food.length===0 && <h1>Im actually Hungry</h1>

    return <>
    {message}
    </>
}
export default EmptyMessage
```


