# Build and Deployment Checklist

Run:

```bash
npm install
npm run build
npm run preview
```

Fix before final:

- No TypeScript errors
- No broken imports
- No missing routes
- No console errors
- No horizontal scroll on mobile
- No overlapped cards
- Header works on mobile
- FAQ keyboard works
- Testimonial controls work
- Contact form validation works
- All links route correctly
- 404 page works
- Build succeeds

Vercel deployment:

```bash
npm install -g vercel
vercel login
vercel
vercel --prod
```
