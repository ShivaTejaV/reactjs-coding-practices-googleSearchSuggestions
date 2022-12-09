// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem/index'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  newSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  selectSuggestion = suggestion => {}

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchInput2 = searchInput.toLowerCase()

    const relevantSuggestionsList = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput2),
    )

    return (
      <div className="bg">
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="Google Logo"
        />
        <ul className="list">
          <div className="searchBarContainer">
            <img
              className="searchIcon"
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="searchBar"
              onChange={this.newSearch}
            />
          </div>
          {relevantSuggestionsList.map(each => (
            <SuggestionItem key={each.id} suggestion={each.suggestion} />
          ))}
        </ul>
      </div>
    )
  }
}

export default GoogleSuggestions
