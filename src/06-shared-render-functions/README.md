# Exercise 6 – Shared Render Functions

Programmers hate repeated code. Right now if you had to change the `className` on your errors, you'd have to change a `<span>` for every field.

## `<Field/>` passes along additional props

One feature of `<Field/>` is that it will pass along any additional props that you give it, _that are not part of [its API](https://final-form.org/docs/react-final-form/types/FieldProps)_, to your render function or component. This allows for some create code reuse.

```jsx
<Field name="myField" meaningOfLife={42}>
  {({ input, meta, meaningOfLife }) => {
    console.log(meaningOfLife) // 42
    return <input {...input} />
  }}
</Field>
```

## Exercise

Refactor to use a single render function, passing through `placeHolder` to the `<input/>` and `<label/>` components in `SignupForm.js`, and use this opportunity to highlight the entire `<div/>` with a `className="active"` when the field it contains has focus (hint: when `meta.active` is `true`).
