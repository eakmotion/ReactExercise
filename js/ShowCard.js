import React from 'react'
import { Link } from 'react-router'
const { string, array } = React.PropTypes

const ShowCard = React.createClass({
  propTypes: {
    game_teams: array.isRequired,
    uuid: string.isRequired
  },
  render () {
    const { game_teams } = this.props
    return (
      <div className='show-card'>
        <div className='sbl-game-content'>
          <div className='sbl-teams'>
            <div className='sbl-team'>
              <div className='sbl-team-logo'>
                <img src={`${game_teams[0].team.image}`} />
              </div>
              <div className='sbl-team-name'>
                <span className='sbl-team-location'>
                  {game_teams[0].team.name}
                </span>
                <span className='sbl-team-mascot'>
                  {game_teams[0].team.mascot}
                </span>
              </div>
              <div className='sbl-team-score-container'>
                <div className='skew'>
                  <div className='sbl-team-score'>
                    {game_teams[0].score}
                  </div>
                </div>
              </div>
            </div>
            <div className='sbl-team'>
              <div className='sbl-team-logo'>
                <img src={`${game_teams[1].team.image}`} />
              </div>
              <div className='sbl-team-name'>
                <span className='sbl-team-location'>
                  {game_teams[1].team.name}
                </span>
                <span className='sbl-team-mascot'>
                  {game_teams[1].team.mascot}
                </span>
              </div>
              <div className='sbl-team-score-container'>
                <div className='skew'>
                  <div className='sbl-team-score'>
                    {game_teams[1].score}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='sbl-game-links'>
            <Link to={`/details/${this.props.uuid}`} className='btn sbl-boxscore-details'>
              Game Details
            </Link>
          </div>
        </div>
      </div>
    )
  }
})

export default ShowCard
