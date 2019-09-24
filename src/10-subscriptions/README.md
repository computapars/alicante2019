# Exercise 10 – Optimization Through Subscriptions

The thing that sets React Final Form apart from all other form libraries is the ability to finely tune precisely when your components will be rerendered. This is done via "subscriptions", by allowing you to specify exactly which bits of field or form state you want your component to be notified about.

## `subscription` Prop

Both `<Form/>` and `<Field/>` accept a `subscription` prop, which is an object full of booleans. For example, if you only wanted to know when your form becomes dirty, you could do something like this:

<!-- prettier-ignore -->
```jsx
<Form onSubmit={onSubmit} subscription={{ dirty: true }}>
  {({ handleSubmit, dirty }) => (
    <form onSubmit={handleSubmit}>

      <div>{dirty ? 'Form is dirty' : 'Form is pristine'}</div>
    
      ...fields here...

    </form>
  )}
</Form>
```

By default, if no `subscription` prop is passed, your `<Form/>` or `<Field/>` will be notified of _all state changes_. **This is a reasonable default.**

## `<FormSpy/>` component

Up until this point we have ignored the third component provided by the React Final Form API: [`<FormSpy/>`](https://final-form.org/docs/react-final-form/api/FormSpy). That is because you have no need for it _until_ you are using subscriptions. What does `<FormSpy/>` do?

`<FormSpy/>` allows you to inject form state that you are no subscribed to in the surrounding `<Form/>` component.

From the docs:

> [`<FormSpy/>` is] a component that subscribes to form state, and injects both form state and the form instance via a render prop.
>
> The `<FormSpy/>` will rerender any time the form state it is subscribed to changes. By default it subscribes to all form state. You can control which form state it subscribes to with the `subscription` prop.

When is it useful? Well, what if our form in the example above was _huge_, and we didn't want to rerender the whole thing every time our `dirty` flag changed? This is an extremely contrived example, but we could do something like this:

<!-- prettier-ignore -->
```jsx
<Form onSubmit={onSubmit} subscription={{}}>
  {({ handleSubmit }) => (
    <form onSubmit={handleSubmit}>

      <FormSpy subscription={{ dirty: true }}>
        {({ dirty }) => (
          <div>{dirty ? 'Form is dirty' : 'Form is pristine'}</div>
        )}
      </FormSpy>

      ...fields here... 
      
      This part of the form will not be rerendered when `dirty` changes.
    </form>
  )}
</Form>
```

As always, when discussing optimization, it must be said:

### ⚠️ DO NOT OPTIMIZE YOUR FORM UNTIL YOU HAVE PERFORMANCE ISSUES ⚠️

## Exercise

Minimize rerenders of each `<Field/>` and the entire `<Form/>` in `SignUpForm.js`. A `<RenderCount/>` component has been included to help you visualize how the form is being rerendered.