## Reflection

### Objectives:

1. Understand key concepts of react andn how it works
2. Use react libraries to build a simple webpage
3. Get familiar with dev tools for react programming

### React Topics

- Use JSX grammar and curly brackets to switch in/out Javascript
- Component and Template

  - Each component is one .js file: `const FileName = <arrow function>`
  - export default Component
  - Template is defined in the return statement
  - Only one top level tag is allowed in template

- Pass Properties to Component
- Structure of React Project

  - src folder: Index.html / App.js / Navbar.js & Home.js etc.
  - public folder:
  - assets folder:
  - data folder:

- [State Management](https://react.dev/learn/state-a-components-memory#)

  - Hook: useState
  - State is private to the component declaring it
  -

- [Hooks](https://react.dev/reference/react) & [Custom Hook](https://react.dev/learn/reusing-logic-with-custom-hooks#extracting-your-own-custom-hook-from-a-component)

  - useEffect: refresh page each time the state variables in dependencies (2nd argument) change
  - useHistory: redirect page to specified url
  - use `<Name>`: Custom Hook

- List enumeration & Conditional Template
- array.map() method: `map((item) => {})`

### Other

- Arrow function: `() => {}`
- Event handler (e) => {}
  - e.target.<property_name>
- CSS style properties
  - Layout: max-width, width, margin, padding, margin-bottom, box-sizing, display,
  - Color: color, background-color
  - Text: font-size, text-align, text-decoration, text-shadow
  - Border: border, border-bottom
- Error Handling
  - catch() method: `catch((err) => {})`
  - throw statement: `throw Error("err_msg")`
- Json-server
  - json-server --watch <json_data_file> --port <port_number>

### Resources

- Simple React Snippets: VSCode extension
-
