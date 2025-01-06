```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href='/about'>
        <a>Go to About</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js

export default function About() {
  // This will cause a hydration mismatch error if the client-side rendering is different
  const randomNumber = Math.random();
  return (
    <div>
      <h1>About Page</h1>
      <p>Random Number: {randomNumber}</p>
    </div>
  );
}
```