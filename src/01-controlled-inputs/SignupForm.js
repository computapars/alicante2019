import React from 'react'

/**
 * Objective: Maintain the values of firstName, lastName and email in
 * local state using `React.useState`, and call `onSubmit` with
 * the two values when the form is submitted.
 *
 * Example submission:
 *   {
 *     firstName: 'Erik',
 *     lastName: 'Rasmussen',
 *     email: 'erik@final-form.org'
 *   }
 */
export default function SignupForm({ onSubmit }) {
  const [
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail ] = React.useState('');
    
  return (
    <form>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <button onSubmit={(email, firstName, lastName) => {
        // do something with this info
        onSubmit(email, firstName, lastName)
      }} type="submit">Submit</button>
    </form>
  )
}
