import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Styles from './Styles'
import exercises from './exercises'

const exercise = 3

const Exercise = exercises[exercise - 1]

ReactDOM.render(
  exercise === 12 ? (
    <Exercise />
  ) : (
    <Styles>
      <Exercise />
    </Styles>
  ),
  document.getElementById('root')
)
