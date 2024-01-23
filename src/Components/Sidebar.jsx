
import PropTypes from 'prop-types'
import FilteredButton from './FilterButton';
import Filtered from './Filtered';
import { useState } from 'react';

const Sidebar = ({active,onClose}) => {

  const [month,setMonth] = useState('');

  const childToParent = (childdata) => {
    setMonth(childdata);
  }


  return (
    <div className={active?"sidebar active":"sidebar"}>
      <button className="close-btn" onClick={onClose}>X</button>
      <FilteredButton month="January" childToParent={childToParent}/>
      <FilteredButton month="February"childToParent={childToParent}/>
      <FilteredButton month="March"childToParent={childToParent}/>
      <FilteredButton month="April"childToParent={childToParent}/>
      <FilteredButton month="May"childToParent={childToParent}/>
      <FilteredButton month="June"childToParent={childToParent}/>
      <FilteredButton month="July"childToParent={childToParent}/>
      <FilteredButton month="August"childToParent={childToParent}/>
      <FilteredButton month="September"childToParent={childToParent}/>
      <FilteredButton month="October"childToParent={childToParent}/>
      <FilteredButton month="November"childToParent={childToParent}/>
      <FilteredButton month="December"childToParent={childToParent}/>

      <Filtered monthFromBtn={month}/>

    </div>
  )
};


Sidebar.propTypes = {
    active: PropTypes.bool,
    onClose: PropTypes.func
}


export default Sidebar;
