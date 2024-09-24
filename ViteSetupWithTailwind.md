## Create React Vite Project
```
npm create vite@latest
npm install
npm run dev
```

## Install Tailwind CSS
```
npm install -D tailwindcss postcss autoprefixer
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

##Add tailwind to ./src/index.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Run Project
```
npm run dev
```