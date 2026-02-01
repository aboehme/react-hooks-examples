# Expandable Card

A simple React component demonstrating conditional rendering using boolean state.

## What it demonstrates
- Boolean state with `useState`
- Conditional rendering using `&&`
- Clean JSX structure
- Accessible toggle behavior (`aria-expanded`)

## Behavior
- Clicking the button toggles the visibility of additional content
- Button label updates based on state

## Key React ideas
- State: `detailsVisible` controls UI visibility
- Rendering: content is only mounted when needed

## Usage
```js
import ExpandableCard from "./ExpandableCard";

function App() {
  return <ExpandableCard />;
}
