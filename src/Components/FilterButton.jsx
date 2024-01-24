
import PropTypes from 'prop-types'
const FilteredButton = ({month,childToParent}) => {

  return (
    <>
    <button onClick={() => childToParent(month)} className="filter-btn">{month}</button>
    </>
  )
};

FilteredButton.propTypes={
    month:PropTypes.string,
    childToParent : PropTypes.func
}


export default FilteredButton;
