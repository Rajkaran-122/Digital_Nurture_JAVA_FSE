# JavaScript Masterclass

This repository contains the solutions to the core JavaScript exercises, focusing on ES6+ features, DOM manipulation, and asynchronous programming.

## Architecture

- `exercises/`: Directory containing isolated logic modules integrated with HTML structures.
  - `01-06-fundamentals.html`: Covers variables, data types, closures, and basic logic.
  - `07-10-dom.html`: Demonstrates event handling, dynamic DOM node creation, and debugging.
  - `11-14-advanced.html`: Focuses on ES6 features (Promises, Arrow Functions, Destructuring) and AJAX calls.
- `assets/js/main.js`: The central script handling event delegations and logic separation.
- `index.html`: Centralized dashboard linking to all exercise modules.

## Implementation Notes

- **Separation of Concerns**: JavaScript logic is decoupled from HTML templates, ensuring clean and maintainable code structure.
- **ES6+ Syntax**: Extensively utilizes modern ECMAScript standards including `let`/`const`, template literals, and Promises for asynchronous operations.
- **DOM Efficiency**: Optimizes DOM interactions by targeting specific containers and utilizing event delegation to minimize memory overhead.

