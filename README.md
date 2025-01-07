# React Router v6 Nested Route with Wildcard (*) Issue

This repository demonstrates a subtle bug in React Router v6 when using nested routes with wildcard paths (`*`). The issue occurs when navigating to a child route within a wildcard route. The wildcard route seems to prevent nested routes from working properly. 

## Steps to Reproduce
1. Clone the repository.
2. Run `npm install`.
3. Run `npm start`.
4. Navigate to `/contact` - it works correctly.
5. Navigate to `/contact/something` - the route will not render properly, potentially showing a blank page or the previous route. 

## Solution
The solution involves using a different approach to handle wildcard routes and nested routes properly, as described in the `bugSolution.js` file.