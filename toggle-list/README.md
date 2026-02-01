# Toggle List

A reusable React component that allows individual items in a list to be expanded or collapsed.

This component demonstrates how to scale simple toggle logic from a single item to multiple items in a clean, maintainable way.

## What it demonstrates
- Managing state for multiple items
- Using a `Set` to track expanded item IDs
- Updating state immutably based on previous state
- Rendering lists with `map`
- Component behavior driven by data, not hardcoded UI

## Behavior
- Each list item can be expanded or collapsed independently
- Clicking an item toggles its details on and off
- Expanded state is stored in the parent component

## Key React ideas
- **State**: A `Set` is used to track which item IDs are expanded
- **Functional state updates**: State is updated using the previous value to avoid bugs
- **Conditional rendering**: Details are only rendered when an item is expanded
- **Stable keys**: Each item uses a unique `id` as its key

## Usage
```js
import Tog
