## New Tailwind Set Up
```
npm create vite@latest
```
```
npm install tailwindcss @tailwindcss/vite
```

Remove all code from vite.config.js and Copy Paste this:
```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/

export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],
})

```

Add this in index.css file:
```
@import "tailwindcss";
```

## Previous Tailwind CSS Installation
```
npm install -D tailwindcss postcss autoprefixer
```
```
npx tailwindcss init -p
```
This should generate tailwind.config.js and postcss.config.js files.

## Update tailwind.config.js content
```
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```

## Add tailwind to ./src/index.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Run Project
```
npm run dev
```

## Adding custom Tailwind classes:
Step 1: Go to App.css and add the custom css
```
.<new_class>{
@apply <property1 property2 ........>
}
```
Step 2: Import App.css into App.jsx
```
import './App.css';
```
