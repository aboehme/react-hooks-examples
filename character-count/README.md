# Character Counter

A small React component demonstrating a controlled `<textarea>` with derived values and validation UI.

## What it demonstrates
- Controlled input (`value` + `onChange`)
- Derived values (character count + remaining characters)
- Validation UI (near-limit warning, over-limit error)
- Accessible feedback (`aria-invalid`, `aria-live`)

## Behavior
- Typing updates character count in real time
- Shows remaining characters
- Displays a warning when close to the limit
- Displays an error when over the limit
- Submit is disabled if empty or over the limit

## Key React ideas
- State: `text`
- Derived values: `count`, `remaining`
- Conditional rendering / UI states based on derived values

## Usage
```js
import CharacterCounter from "./CharacterCounter";

function App() {
  return <CharacterCounter />;
}
