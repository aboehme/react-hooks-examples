# Delayed Greeting

A small React component that demonstrates how to run side effects after a component mounts using `useEffect`.

## What this component demonstrates
- Using `useEffect` to run code after render
- Running an effect only once on component mount
- Updating state asynchronously after a delay
- Cleaning up side effects to prevent memory leaks

## Behavior
- The component initially displays a loading message
- After a short delay, the message updates to a greeting
- If the component unmounts before the delay completes, the scheduled update is cancelled

## How it works
- Component state (`message`) is initialized to `"Loading"`
- A `useEffect` runs after the initial render
- Inside the effect, `setTimeout` schedules a state update
- When the timeout completes, the state setter triggers a re-render
- A cleanup function clears the timeout if the component unmounts early

## Why cleanup matters
The cleanup function returned from `useEffect` prevents the timeout from running after the component has unmounted.  
This avoids attempting to update state on an unmounted component and prevents memory leaks.

## Key React ideas
- `useEffect` is used for timing and side effects, not for rendering logic
- State updates (`setMessage`) trigger re-renders
- Effects can return cleanup functions to undo side effects

## Usage
```js
import DelayedGreeting from "./DelayedGreeting";

function App() {
  return <DelayedGreeting />;
}
