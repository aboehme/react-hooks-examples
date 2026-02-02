# Character Counter

A simple React component that demonstrates a controlled text input with derived values.

## What this component demonstrates
- Controlled inputs using `useState`
- Deriving values from state instead of storing redundant state
- React re-rendering UI in response to state changes

## Controlled vs Uncontrolled Inputs

This component uses a **controlled input**.

A controlled input is one whose value is stored in React state and updated through `onChange`, which causes React to re-render the UI as the user types.

An uncontrolled input stores its value in the DOM instead of React state. Because the value is not tracked in state, React does not know when the input’s value changes unless it is read manually (for example, using a ref on submit).

In this example, the textarea is controlled so that React always knows the current value, allowing the character count to update in real time.

## How it works
- The textarea value is stored in state (`text`)
- The character count is derived from `text.length`
- Every user edit updates state, triggering a re-render

## Usage
```js
import CharacterCounter from "./CharacterCounter";

function App() {
  return <CharacterCounter />;
}
