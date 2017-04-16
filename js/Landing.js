import React from 'react'
import { Link } from 'react-router'

const Landing = React.createClass({
  render () {
    return (
      <div className='landing'>
        <h1>Scorebook Live</h1>
        <h2>WHAT IS SCOREBOOK LIVE?</h2>
        <h3>The first replacement for the paper scorebook</h3>
        <h3>Easier to use than paper</h3>
        <h3>Streams live updates to fans</h3>
        <Link to='/search'>LIVE SCOREBOARD HERE</Link>
      </div>
    )
  }
})

export default Landing
