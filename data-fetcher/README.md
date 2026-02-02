# Data Fetcher

A simple React component that demonstrates how to fetch data as a side effect using `useEffect` and Promises.

This example focuses on the core data-fetching pattern used in real React applications: loading state, error handling, and rendering based on async results.

## What this component demonstrates
- Using `useEffect` for side effects
- Running async logic after a component mounts
- Managing loading, error, and success UI states
- Updating React state from a resolved Promise

## Behavior
- The component initially renders a loading message
- A mock fetch function simulates an async request
- When the Promise resolves, state is updated and the UI re-renders
- If an error were to occur, an error state would be displayed instead

## How it works
- Component state is initialized with:
  - `loading = true`
  - `data = null`
  - `error = null`
- A `useEffect` runs once after the initial render
- Inside the effect, a mock fetch function returns a Promise
- When the Promise resolves, the resolved value is stored in state
- Updating state triggers a re-render and displays the loaded data

## About the mock fetch
The mock fetch function returns a Promise that resolves after a delay using `setTimeout`.  
This simulates how real network requests behave without requiring an actual API.

The Promise uses `resolve(value)` to signal successful completion, and the resolved value is received by `.then()`.

## Key React ideas
- Side effects should not run during render
- `useEffect` controls *when* async work runs
- State updates trigger re-renders
- Rendering is driven entirely by state, not by timing logic

## Usage
```js
import DataFetcher from "./DataFetcher";

function App() {
  return <DataFetcher />;
}
