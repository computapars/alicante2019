import React from 'react'
import { Form, Field } from 'react-final-form'
import isEmail from 'sane-email-validation'

/**
 * Objective: Add record-level validation to <Form>
 *
 * Requirements:
 *  - It should call `onSubmit` when the form is submitted.
 *  - The form should not submit if the values are invalid
 *    (React Final Form will handle this for you)
 *  - Errors should be displayed next to the inputs in a `<span>`
 */
export default function SignupForm({ onSubmit }) {
  return (
    <Form
      onSubmit={onSubmit}
      validate={(values) => {
        const errors = {};
        if(!values.firstName){
          errors.firstName = "required"
        }
        if (!values.lastName){
          errors.lastName = "Required"
        }
        if(!values.email){
          errors.email = "Required"
        } else if (!isEmail(values.email)){
          errors.email = "Not really an email";
        }
        return errors;
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <Field
              type="text"
              name="firstName"
            >
              {({ input, meta }) => (
                <React.Fragment>
                  <input
                    {...input}
                  />
                  {(meta.error && meta.touched) && (
                    <span>{meta.error}</span>
                  )}
                </React.Fragment>
              )}
            </Field>
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <Field
              type="text"
              name="lastName"
            >
              {({ input, meta }) => (
                <React.Fragment>
                  <input
                    {...input}
                  />
                  {(meta.error && meta.touched) && (
                    <span>{meta.error}</span>
                  )}
                </React.Fragment>
              )}
            </Field>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field
              type="text"
              name="email"
            >
              {({ input, meta }) => (
                <React.Fragment>
                  <input
                    {...input}
                  />
                  {(meta.error && meta.touched) && (
                    <span>{meta.error}</span>
                  )}
                </React.Fragment>
              )}
            </Field>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </Form>
  )
}
