import React from 'react'
import { Form, Field } from 'react-final-form'

/**
 * Objective: Implement a checkbox for a boolean, a set of
 * checkboxes for an array, a radio button, a single select,
 * and a multiple select.
 *
 * We are ignoring validation and going back to the
 * component="input" pattern.
 */
export default function SignupForm({ onSubmit }) {
  return (
    <Form onSubmit={onSubmit}>
      {({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit}>
          <h3>Do you agree to the terms?</h3>
          <div>
            <div>
              <label>
                <Field
                  name="agreed"
                  type="checkbox"
                  component="input"
                />
                Yes
              </label>
            </div>
          </div>
          <h3>Which months have 30 days?</h3>
          <div>
            <div>
              <label>
              <Field
                name="months"
                value="January"
                component="input"
                type="checkbox"
              />
              January
              </label>
            </div>
            <div>
              <label>
                <Field
                  name="months"
                  value="Februrary"
                  component="input"
                  type="checkbox"
                />
                Februrary
              </label>
            </div>
            <div>
              <label>
              <Field
                  name="months"
                  value="March"
                  component="input"
                  type="checkbox"
                />
                March
              </label>
            </div>
            <div>
              <label>
                <Field
                    name="months"
                    value="April"
                    component="input"
                    type="checkbox"
                  />
                  April
              </label>
            </div>
            <div>
              <label>
                <Field
                    name="months"
                    value="May"
                    component="input"
                    type="checkbox"
                  />
                  May
              </label>
            </div>
            <div>
              <label>
              <Field
                    name="months"
                    value="June"
                    component="input"
                    type="checkbox"
                  />
                  June
              </label>
            </div>
            <div>
              <label>
                <Field
                    name="months"
                    value="July"
                    component="input"
                    type="checkbox"
                  />
                  July
              </label>
            </div>
            <div>
              <label>
                <Field
                    name="months"
                    value="August"
                    component="input"
                    type="checkbox"
                  />
                  August
              </label>
            </div>
            <div>
              <label>
                  <Field
                    name="months"
                    value="September"
                    component="input"
                    type="checkbox"
                  />
                  September
              </label>
            </div>
            <div>
              <label>
                <Field
                    name="months"
                    value="October"
                    component="input"
                    type="checkbox"
                  />
                  October
              </label>
            </div>
            <div>
              <label>
                <Field
                    name="months"
                    value="November"
                    component="input"
                    type="checkbox"
                  />
                  November
              </label>
            </div>
            <div>
              <label>
                <Field
                    name="months"
                    value="December"
                    component="input"
                    type="checkbox"
                  />
                  December
              </label>
            </div>
          </div>
          <h3>This workshop is amazing</h3>
          <div>
            <div>
              {' '}
              <label>
                {' '}
                <Field
                    name="rating"
                    value="5"
                    component="input"
                    type="radio"
                  >
                  </Field>
                  Strongly Agree

              </label>{' '}
            </div>
            <div>
              {' '}
              <label>
                {' '}
                <Field
                    name="rating"
                    value="4"
                    component="input"
                    type="radio"
                  >
                  </Field>
                  Agree

              </label>{' '}
            </div>
            <div>
              {' '}
              <label>
                {' '}
                <Field
                    name="rating"
                    value="3"
                    component="input"
                    type="radio"
                  >
                    
                  </Field>
                  Meh
              </label>{' '}
            </div>
            <div>
              {' '}
              <label>
                {' '}
                <Field
                    name="rating"
                    value="2"
                    component="input"
                    type="radio"
                  >
                  </Field>
                  Disagree

              </label>{' '}
            </div>
            <div>
              {' '}
              <label>
                {' '}
                <Field
                    name="rating"
                    value="1"
                    component="input"
                    type="radio"
                  >
                  </Field>
                  Strongly Agree

              </label>{' '}
            </div>
          </div>
          <h3>Favorite color?</h3>
          <div>
            <Field component="select" name="favoriteColor">
              <option />
              <option value="#ff0000">❤️ Red</option>
              <option value="#00ff00">💚 Green</option>
              <option value="#0000ff">💙 Blue</option>
            </Field>
          </div>
          <h3>Toppings</h3>
          <div>
            <Field component="select" name="toppings" multiple>
              <option value="pepperoni">Pepperoni</option>
              <option value="sausage">Sausage</option>
              <option value="ham">Ham</option>
              <option value="mushrooms">Mushrooms</option>
              <option value="olives">Olives</option>
              <option value="pineapple">Pineapple</option>
            </Field>
          </div>
          <button type="submit">Submit</button>
          <pre>{JSON.stringify(values, undefined, 2)}</pre>
        </form>
      )}
    </Form>
  )
}
