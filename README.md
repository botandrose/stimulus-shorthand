# Stimulus Shorthand

Convention to make simple controllers less noisy in the template.

## Usage

```js
// app/javascripts/controllers/if_controller.js
shorthand({ controller: "if", value: "condition" })
export default class extends Controller {
  static values = {
    condition: String,
  }
  // ...
}
```

```html
<div data-if="checkbox is checked">
<!-- equivalent to: -->
<div data-controller="if" data-if-condition-value="checkbox is checked">
```
