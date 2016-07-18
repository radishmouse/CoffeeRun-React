
# Awesome things

- You can use the same `build` and `watch` scripts as Chattrbox
  - This is because Babel supports React (and JSX) by default.
- Documentation and warning messages are really good
  - Warnings sometimes include links to documentation telling you what you need to know to fix something.

# Good practices:

- In your React classes, your custom names should be prefixed with an `_`
  - This helps you differentiate between your custom methods and React's component lifecycle methods.
- Use `const` instead of `let` unless you know you *need* to change a value.
- Use `map` and `filter` to build collections of child components
  - Single line arrow functions (with no curly braces and implicit return) provide concise syntax.


# Things to know:

- Inside of `render`, if you need to return sibling components, wrap them in a single container.
- When you subclass `React.Component`, you must call `super()` in the `constructor`
- `this.props` are *not* available in `constructor`, only `render` or functions that occur after `render` (some lifecycle methods or your custom event handlers)
- When you pass a function to a child component, make sure to `.bind(this)`
- In your JSX markup:
  - use `className` to set the HTML `class` attribute.
  - use `htmlFor` to set the HTML `for` attribute.
- Multiple child components of the same kind need to be passed a `key` attribute.
  - see [https://fb.me/react-warning-keys](https://fb.me/react-warning-keys)
