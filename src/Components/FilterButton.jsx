
import PropTypes from 'prop-types'
const FilteredButton = ({month}) => {
  return (
    <button className="filter-btn">{month}</button>
  )
};

FilteredButton.propTypes={
    month:PropTypes.string
}


export default FilteredButton;
