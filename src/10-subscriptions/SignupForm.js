import React from 'react'
import { Form, Field } from 'react-final-form'
import validate from './validate'
import RenderCount from './RenderCount'

const useSecondsSinceMount = () => {
  const [seconds, setSeconds] = React.useState(0)
  React.useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  return seconds
}

const WithSecondsSinceMount = ({ children }) => {
  const seconds = useSecondsSinceMount()
  return children(seconds)
}
const LargeComponent = () => {
  return (
    <div>
      <div>SOME HUGE CONTENT</div>
      <WithSecondsSinceMount>
        {seconds => <div>{seconds} seconds</div>}
      </WithSecondsSinceMount>
      <div>MORE HUGE CONTENT</div>
    </div>
  )
}

/**
 * Objective: Minimize rerenders of `<Form/>` and all `<Field/>`s
 *
 * Requirements:
 *  - The entire form should not rerender when a value changes
 *  - You must continue to show the current form values at the bottom
 */
export default function SignupForm({ onSubmit }) {
  return (
    <Form onSubmit={onSubmit} validate={validate}>
      {({ handleSubmit, values, submitting }) => (
        <form onSubmit={handleSubmit}>
          <div style={{ padding: 60, border: '1px solid red' }}>
            <LargeComponent />
          </div>
          <RenderCount />
          <Field name="firstName">
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
          <Field name="lastName">
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
          <pre>
            <RenderCount />
            {JSON.stringify(values, undefined, 2)}
          </pre>
        </form>
      )}
    </Form>
  )
}
