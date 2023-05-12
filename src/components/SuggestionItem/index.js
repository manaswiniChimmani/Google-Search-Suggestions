// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {searchItem, updateInput} = props
  const {suggestion} = searchItem

  const onClickUpdateSearch = () => {
    updateInput(suggestion)
  }

  return (
    <li className="li" onClick={onClickUpdateSearch}>
      <p className="p1">{suggestion}</p>
      <img
        className="icon"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow icon"
      />
    </li>
  )
}
export default SuggestionItem
