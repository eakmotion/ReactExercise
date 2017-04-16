import React from 'react'
import Header from './Header'
const { shape, string, array } = React.PropTypes

const Details = React.createClass({
  propTypes: {
    game: shape({
      game_teams: array,
      location: string,
      date: string
    })
  },
  render () {
    const { location, date, game_teams } = this.props.game
    return (
      <div className='details'>
        <Header />
        <section>
          <span>{game_teams[0].team.name}</span>
          <img src={`${game_teams[0].team.image}`} width='50px' />
          <span>{game_teams[0].score}</span>
          ({date})
          <span>{game_teams[1].score}</span>
          <img src={`${game_teams[1].team.image}`} width='50px' />
          <span>{game_teams[1].team.name}</span>
        </section>

        <section>
          Location: {location}
        </section>

        <section>
          <table>
            <thead>
              <tr>
                <th />
                <th>1</th>
                <th>2</th>
                <th>T</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{game_teams[0].team.name}</td>
                <td>2</td>
                <td />
                <td>2</td>
              </tr>
              <tr>
                <td>{game_teams[1].team.name}</td>
                <td>0</td>
                <td />
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          TEAM STATS <br />
          <table>
            <thead>
              <tr>
                <th />
                <th>PTS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{game_teams[0].team.name}</td>
                <td>{game_teams[0].score}</td>
              </tr>
              <tr>
                <td>{game_teams[1].team.name}</td>
                <td>{game_teams[1].score}</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    )
  }
})

export default Details
