```javascript
// pages/about.js

export default function About({ randomNumber }) {
  return (
    <div>
      <h1>About Page</h1>
      <p>Random Number: {randomNumber}</p>
    </div>
  );
}

export async function getServerSideProps() {
  const randomNumber = Math.random();
  return {
    props: {
      randomNumber,
    },
  };
}
```