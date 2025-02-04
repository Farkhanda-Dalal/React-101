# Context API and Its Application

## Introduction to Context API
The Context API is a feature in React that allows developers to share values (such as themes, user data, or global states) between components without having to pass props down manually through every level of the component tree.

### Why Use Context API?
- **Avoid Prop Drilling:** Prop drilling is when data is passed down through multiple nested components unnecessarily.
- **Centralized State Management:** Manage shared state efficiently without relying on external state management libraries.
- **Cleaner Code:** Improves the readability and maintainability of code by reducing redundant props.

## Understanding the Code Example
This example demonstrates how to use the Context API to toggle between a light and dark theme.

### Project Structure
```
├── App.js
├── components
│   └── Toolbar.js
├── store
│   └── ThemeGenerator.js
└── README.md
```

### Breakdown of the Code
#### **1. Creating the Context (`ThemeGenerator.js`)**
```javascript
import { createContext } from "react";

export const ThemeGenerator = createContext([]);
```
- `createContext`: Creates a Context object called `ThemeGenerator`.
- The empty array (`[]`) passed initially is just a placeholder and will be replaced by the actual value when provided in the `App.js`.

#### **2. Using the Context Provider (`App.js`)**
```javascript
import React from 'react';
import { ThemeGenerator } from './store/ThemeGenerator';
import { useState } from 'react';
import Toolbar from './components/Toolbar';

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeGenerator.Provider value={{ theme, setTheme }}>
      <Toolbar />
    </ThemeGenerator.Provider>
  );
};

export default App;
```
- **State Management:** `useState` hook manages the theme state (`light` or `dark`).
- **Context Provider:** Wraps the `Toolbar` component with `ThemeGenerator.Provider`, providing the `theme` and `setTheme` values to all components inside.
- The value prop `{ theme, setTheme }` makes these values accessible to child components.

#### **3. Consuming the Context (`Toolbar.js`)**
```javascript
import React, { useContext } from 'react';
import { ThemeGenerator } from '../store/ThemeGenerator';

const Toolbar = () => {
  const { theme, setTheme } = useContext(ThemeGenerator);

  return (
    <>
      <div>{theme}</div>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </>
  );
};

export default Toolbar;
```
- **Accessing Context:** `useContext` hook consumes the context values (`theme` and `setTheme`).
- **Dynamic UI Update:** Displays the current theme and toggles it between `light` and `dark` when the button is clicked.

### How It Works
1. Initially, the theme state is set to `light`.
2. The `Toolbar` component displays the current theme and a button to toggle it.
3. When the button is clicked, `setTheme` updates the theme to the opposite value (`light` or `dark`).
4. The updated theme value is reflected across components without passing props manually.

## Key Concepts
- **Context Creation:** `createContext()` initializes a new context.
- **Provider:** `ThemeGenerator.Provider` wraps components and provides context values.
- **Consumer:** `useContext(ThemeGenerator)` accesses context values.

## Benefits of Context API
- Simplifies state sharing between components.
- Reduces prop drilling.
- Enhances maintainability and readability.

## Usage Instructions
1. Clone the repository.
2. Install dependencies with `npm install`.
3. Run the project with `npm start`.

## Conclusion
This example illustrates a basic use case of the Context API to manage themes in a React application. By using Context, developers can avoid prop drilling and create cleaner, more maintainable code.
