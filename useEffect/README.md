# Understanding `useEffect` in React – Beginner Friendly Guide 👶✨

React's `useEffect` is a **Hook** used to handle **side effects** in functional components. A side effect is anything that affects something outside the scope of the function—like:

* Fetching data
* Setting a timer
* Changing the DOM
* Logging
* Animating
* Changing state based on some condition

`useEffect` runs **after the component is rendered**.

```jsx
useEffect(() => {
  // side effect here
}, [dependencies]);
```

* The code inside `useEffect` runs **after the first render** and **every time a dependency changes**.
* The `dependencies` array controls when the effect runs.

---

## Example 1: Run Only on First Load ⏳

```jsx
const [ans, setAns] = useState("");

useEffect(() => {
  const timer = setTimeout(() => {
    setAns("I will ans ur questions");
  }, 5000);

  return () => clearTimeout(timer); // Cleanup when component unmounts
}, []);
```

### 🔍 What's Happening:

* The `useEffect` has an empty dependency array `[]`, so it only runs once—when the page loads.
* A timer is set for 5 seconds.
* After 5 seconds, the text updates.
* Cleanup is done with `clearTimeout()` if the component unmounts.

---

## Example 2: React to State Change 🔄

```jsx
const real = "I am saying the truth";
const lie = "I am lyingggggg";
const [flag, setFlag] = useState(true);
const [ans, setAns] = useState(real);

useEffect(() => {
  !flag ? setAns(lie) : setAns(real);
}, [flag]);
```

### 🔍 What's Happening:

* We are watching the `flag` variable.
* When the flag changes (by clicking a button), we update `ans` with a different message.
* `useEffect` runs **every time `flag` changes**.

---

## Example 3: Change Style After Condition ✅

```jsx
const [count, setCount] = useState(0);
const [style, setStyle] = useState(false);

useEffect(() => {
  if (count > 10 && !style) setStyle(true);
}, [count, style]);
```

### 🔍 What's Happening:

* When `count` becomes greater than 10, `style` is set to true.
* This triggers a style change for the displayed number.
* The useEffect only runs when either `count` or `style` changes.
* ✅ Good example of using conditions inside `useEffect`.

---

## Can I Have Multiple `useEffect`s? 🤔

**Yes!** You can use multiple `useEffect`s in one component, and you should when:

* Each effect handles a different concern (good separation of logic).
* They depend on different variables.

```jsx
useEffect(() => {
  // Runs on mount
}, []);

useEffect(() => {
  // Runs when count changes
}, [count]);

useEffect(() => {
  // Runs when user or theme changes
}, [user, theme]);
```

---

## When Interviewer Asks: “Explain `useEffect`”

**Sample Answer:**

> `useEffect` is a React Hook that lets you run side effects in your component, like fetching data or setting a timer. You can control when it runs by passing a dependency array. If it's empty, it runs once on mount. If it has values, it runs every time those values change. You can also use cleanup functions to clear timers or remove event listeners.

---
