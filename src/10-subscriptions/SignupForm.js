import React from 'react'
import { Form, Field, FormSpy } from 'react-final-form'
import validate from './validate'
import RenderCount from './RenderCount'

/**
 * Objective: Minimize rerenders of `<Form/>` and all `<Field/>`s
 *
 * Requirements:
 *  - The entire form should not rerender when a value changes
 *  - You must continue to show the current form values at the bottom
 */
export default function SignupForm({ onSubmit }) {
  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      subscription={{
        submitting: true,
      }}
    >
      {({ handleSubmit, values, submitting }) => (
        <form onSubmit={handleSubmit}>
          <RenderCount />
          <Field 
            name="firstName"
          >
            {({ input, meta }) => (
              <div>
                <RenderCount />
                <label htmlFor="firstName">First Name</label>
                <input
                  {...input}
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field
            name="lastName">
            {({ input, meta }) => (
              <div>
                <RenderCount />
                <label htmlFor="lastName">Last Name</label>
                <input
                  {...input}
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="email">
            {({ input, meta }) => (
              <div>
                <RenderCount />
                <label htmlFor="email">Email</label>
                <input {...input} id="email" type="email" placeholder="Email" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <button type="submit" disabled={submitting}>
            Submit
          </button>
            <RenderCount />
            <FormSpy
              subscription={{
                values: true,
              }}
            >
              {({values}) => (
                <pre>
                {JSON.stringify(values, undefined, 2)}
                </pre>
              )}
            </FormSpy>
        </form>
      )}
    </Form>
  )
}
