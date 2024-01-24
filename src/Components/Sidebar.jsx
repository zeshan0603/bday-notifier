
import PropTypes from 'prop-types'
import FilteredButton from './FilterButton';
import { useState } from 'react';
import monthsArr from '../assets/month.js'
import Modal from './Modal.jsx';


const Sidebar = ({ active, onClose }) => {

  const [openModal,setOpenModal] = useState(false)
  const [month, setMonth] = useState('');
  
  const childToParent = (childdata) => {
    setMonth(childdata); 
    setOpenModal(true);// Show the modal when child data is received
  };

  return (
    <div className={active ? "sidebar active" : "sidebar"}>
      <button className="close-btn" onClick={onClose}>X</button>
      {monthsArr.map((month) => (
        <FilteredButton key={month} month={month} onClick={childToParent} childToParent={childToParent} />
      ))}

    {openModal && <Modal monthFromBtn={month} closeModal={setOpenModal}/>  }
    </div>
  )
};


Sidebar.propTypes = {
  active: PropTypes.bool,
  onClose: PropTypes.func
}


export default Sidebar;
