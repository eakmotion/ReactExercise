import React from 'react'
import ShowCard from './ShowCard'
import Header from './Header'
const { arrayOf, shape, string } = React.PropTypes

const Search = React.createClass({
  propTypes: {
    games: arrayOf(shape({
      slug: string
    }))
  },
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  handleSearchTermChange (event) {
    this.setState({searchTerm: event.target.value})
  },
  render () {
    return (
      <div className='search'>
        <Header
          showSearch
          searchTerm={this.state.searchTerm}
          handleSearchTermChange={this.handleSearchTermChange}
        />
        <div>
          {this.props.games
            .filter((game) => `${game.slug}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map((game) => {
              return (
                <ShowCard key={game.uuid} {...game} />
              )
            })}
        </div>
      </div>
    )
  }
})

export default Search
