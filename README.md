# Next.js 15 Hydration Mismatch Bug

This repository demonstrates a hydration mismatch bug in Next.js 15.  The bug occurs when a component renders a random number on the client-side that differs from the number rendered on the server-side. This causes Next.js to throw a hydration mismatch error, resulting in a broken user experience. 

## Bug Description
The `About` page uses `Math.random()` to generate a random number. Because this number is generated differently on the server and the client, Next.js will detect the difference and throw a hydration mismatch error. 

## Solution
The solution involves ensuring that the client-side and server-side rendering produce consistent results.  This can be achieved by generating the random number on the server-side and passing it as a prop to the component.