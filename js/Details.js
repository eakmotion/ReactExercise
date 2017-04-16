import React from 'react'
import Header from './Header'
const { shape, string, array } = React.PropTypes

const Details = React.createClass({
  propTypes: {
    game: shape({
      game_teams: array,
      location: string,
      slug: string
    })
  },
  render () {
    const { location, game_teams, slug } = this.props.game
    return (
      <div className='details'>
        <Header />
        <section className='sbl-game'>
          <span className='team-name'>{game_teams[0].team.name}</span>
          <img src={`${game_teams[0].team.image}`} width='50px' />
          <span className='sbl-team-score'>{game_teams[0].score}</span>
          <span className='sbl-game-status-info'>VS</span>
          <span className='sbl-team-score'>{game_teams[1].score}</span>
          <img src={`${game_teams[1].team.image}`} width='50px' />
          <span className='team-name'>{game_teams[1].team.name}</span>
        </section>

        <section className='mod-game-meta'>
          Location: {location}
        </section>

        <section>
          <table className='table-data sbl-linescore'>
            <thead>
              <tr>
                <th className='left'>TEAM</th>
                <th>1</th>
                <th>2</th>
                <th>T</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='left'>
                  <a href={`http://scorebooklive.com/teams/${game_teams[0].team.slug}`} target='_blank'>
                    {game_teams[0].team.name}
                  </a>
                </td>
                <td>{game_teams[0].score}</td>
                <td>0</td>
                <td>{game_teams[0].score}</td>
              </tr>
              <tr>
                <td className='left'>
                  <a href={`http://scorebooklive.com/teams/${game_teams[1].team.slug}`} target='_blank'>
                    {game_teams[1].team.name}
                  </a>
                </td>
                <td>{game_teams[1].score}</td>
                <td>0</td>
                <td>{game_teams[1].score}</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <table className='table-data sbl-linescore'>
            <thead>
              <tr>
                <th className='left'>TEAM</th>
                <th>PTS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='left'>
                  <a href={`http://scorebooklive.com/teams/${game_teams[0].team.slug}`} target='_blank'>
                    {game_teams[0].team.name}
                  </a>
                </td>
                <td>{game_teams[0].score}</td>
              </tr>
              <tr>
                <td className='left'>
                  <a href={`http://scorebooklive.com/teams/${game_teams[1].team.slug}`} target='_blank'>
                    {game_teams[1].team.name}
                  </a>
                </td>
                <td>{game_teams[1].score}</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className='mod-game-meta'>
          <a href={`http://scorebooklive.com/games/${slug}`} target='_blank'>
            Source-URL
          </a>
        </section>

      </div>
    )
  }
})

export default Details
