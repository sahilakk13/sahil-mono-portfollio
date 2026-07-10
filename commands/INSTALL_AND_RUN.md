# Commands

If starting fresh:

```bash
npm create vite@latest sahil-mono-portfolio -- --template react-ts
cd sahil-mono-portfolio
npm install
npm install framer-motion react-router-dom lucide-react clsx
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm run dev
```

Build:

```bash
npm run build
npm run preview
```

Deploy to Vercel:

```bash
npm install -g vercel
vercel login
vercel
vercel --prod
```

If using an existing repo:

```bash
npm install
npm install framer-motion react-router-dom lucide-react clsx
npm run dev
```
