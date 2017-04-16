import React from 'react'
import { render } from 'react-dom'

const App = React.createClass({
  render () {
    return (
      <div>
        <h3>Hello</h3>
      </div>
    )
  }
})

render(<App />, document.getElementById('app'))
