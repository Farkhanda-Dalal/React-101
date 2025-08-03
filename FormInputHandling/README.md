# 📄 React Form Input Handling: `useState` vs `useRef`

This project demonstrates **two ways** to handle user input in React:

* Using `useState`
* Using `useRef`

---

## 📦 1. Using `useState`

```jsx
const [state, setState] = useState("");

<input type="text" onChange={(e) => setState(e.target.value)} />
<h5>{`Input was= ${state}`}</h5>
```

### ✅ Pros:

* The input value is **stored in state**, so it can be **displayed, validated, or sent to APIs** easily.
* Good for **live previews**, **validation**, or anytime the UI needs to respond to changes.

### ❌ Cons:

* **Triggers re-render** on every keystroke (because state updates cause component to re-render).
* May be unnecessary if you're only using the value on submit.

---

## 📦 2. Using `useRef`

```jsx
const ip = useRef(null);

<input ref={ip} />
<button onClick={() => alert(ip.current.value)}>Submit</button>
```

### ✅ Pros:

* **No re-render** on every input change — great for performance in large forms.
* Cleaner when you only need the value **at one moment**, e.g., on form submission.

### ❌ Cons:

* You **can’t reactively display** the input value (e.g., no live preview).
* It's more "manual" — feels like traditional JavaScript (`document.querySelector` vibes).

---

## 🔄 Re-rendering Behavior

| Hook       | Re-renders Component? | When to Use                             |
| ---------- | --------------------- | --------------------------------------- |
| `useState` | ✅ Yes                 | Input shown in UI, validation, previews |
| `useRef`   | ❌ No                  | Only need value on submit or manually   |

---

## 💡 Best Practices

* Use `**useState**` if:

  * The value affects what’s rendered (`<h5>{state}</h5>`, validation errors, dynamic styles).
  * You’re building a controlled component.

* Use `**useRef**` if:

  * You want to access the value only at a specific moment (e.g., on submit).
  * You want to **avoid unnecessary re-renders**.
  * You're dealing with **focus, scroll**, or other DOM-level actions.

---

## 🔁 Future Expansion

Consider combining `useRef` + `useEffect` if you want to **focus the input** on mount:

```js
useEffect(() => {
  ip.current.focus();
}, []);
```

---

## 🧪 Conclusion

Both `useState` and `useRef` are useful for input handling:

* Choose **`useState`** for reactive, live feedback.
* Choose **`useRef`** for performance and one-time value access.

---
