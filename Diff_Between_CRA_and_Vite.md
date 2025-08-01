### ✅ **Q: What is the difference between CRA and Vite? How do you install them?**

### 🟦 **Answer:**

**Create React App (CRA)** and **Vite** are both tools to set up React projects, but they differ in performance, architecture, and developer experience.

---

### 🔸 **Main Differences:**

| Feature                          | CRA                                 | Vite                                       |
| -------------------------------- | ----------------------------------- | ------------------------------------------ |
| **Bundler**                      | Uses **Webpack**                    | Uses **ESBuild** (dev) + **Rollup** (prod) |
| **Startup Time**                 | Slower (bundles entire app upfront) | Instant (serves files on demand)           |
| **Hot Module Replacement (HMR)** | Slower (reloads full app)           | Fast (reloads only the changed module)     |
| **Configuration**                | Hidden (needs eject to customize)   | Fully exposed via `vite.config.js`         |
| **Flexibility**                  | Opinionated, harder to modify       | Very flexible and modern                   |
| **Plugin Ecosystem**             | Based on Webpack                    | Modern plugin system, fast growing         |
| **Tailwind Integration**         | Slightly tricky                     | Very smooth and fast                       |

---

### 🔧 **Installation Steps:**

#### ✅ **Using Create React App:**

```bash
npx create-react-app my-app
cd my-app
npm start
```

To use **TypeScript**:

```bash
npx create-react-app my-app --template typescript
```

---

#### ✅ **Using Vite:**

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```

To use **TypeScript**:

```bash
npm create vite@latest my-app -- --template react-ts
```

---

### 🧠 Summary:

* **CRA** is older, stable, and good for beginners, but slower.
* **Vite** is faster, modern, and ideal for projects needing speed, modularity, and flexibility.
* In 2025, **Vite is the preferred choice** for modern React apps.

---
