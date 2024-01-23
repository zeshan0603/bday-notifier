
import PropTypes from 'prop-types'
import FilteredButton from './FilterButton';

const Sidebar = ({active,onClose}) => {
  return (
    <div className={active?"sidebar active":"sidebar"}>
      <button className="close-btn" onClick={onClose}>X</button>
      <FilteredButton month="January"/>
      <FilteredButton month="February"/>
      <FilteredButton month="March"/>
      <FilteredButton month="April"/>
      <FilteredButton month="May"/>
      <FilteredButton month="June"/>
      <FilteredButton month="July"/>
      <FilteredButton month="August"/>
      <FilteredButton month="September"/>
      <FilteredButton month="October"/>
      <FilteredButton month="November"/>
      <FilteredButton month="December"/>
    </div>
  )
};


Sidebar.propTypes = {
    active: PropTypes.bool,
    onClose: PropTypes.func
}


export default Sidebar;
