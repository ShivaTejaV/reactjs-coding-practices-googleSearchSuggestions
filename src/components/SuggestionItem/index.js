// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestion} = props
  return (
    <li className="listItem">
      <p>{suggestion}</p>
      <img
        className="arrowIcon"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow icon"
      />
    </li>
  )
}

export default SuggestionItem
