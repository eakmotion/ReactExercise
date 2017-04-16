import React from 'react'
import { Link } from 'react-router'
const { string, array } = React.PropTypes

const ShowCard = React.createClass({
  propTypes: {
    game_teams: array.isRequired,
    date: string.isRequired,
    uuid: string.isRequired
  },
  render () {
    const { game_teams, date } = this.props
    return (
      <div className='show-card'>
        <div className='row'>
          <div className='col-xs-6'>
            <div className='sbl-team'>
              <img src={`${game_teams[0].team.image}`} width='50px' />
              {game_teams[0].team.name}
              ({game_teams[0].team.mascot})
            </div>
            <div className='sbl-team'>
              <img src={`${game_teams[1].team.image}`} width='50px' />
              {game_teams[1].team.name}
              ({game_teams[1].team.mascot})
            </div>
            <p>{date}</p>
          </div>
          <div className='col-xs-6'>
            <Link to={`/details/${this.props.uuid}`}>
              <div className='button'>GAME DETAILS</div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
})

export default ShowCard
