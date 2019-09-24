import React from 'react'
import onSubmit from '../onSubmit'
import SignupForm from './SignupForm'

/**
 * Your assignment is in SignupForm.js
 */
export default function App() {
  return (
    <div>
      <SignupForm onSubmit={onSubmit} />
    </div>
  )
}
