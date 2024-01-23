
import PropTypes from 'prop-types'
import FilteredButton from './FilterButton';
import { useState } from 'react';
import monthsArr from '../assets/month.js'
import { Button, Modal } from 'antd';


const Sidebar = ({ active, onClose }) => {

  const [month, setMonth] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const childToParent = (childdata) => {
    setMonth(childdata);
    showModal(); // Show the modal when child data is received
  };


  return (
    <div className={active ? "sidebar active" : "sidebar"}>
      <button className="close-btn" onClick={onClose}>X</button>
      {monthsArr.map((month) => (
        <FilteredButton key={month} month={month} onClick={childToParent} childToParent={childToParent} />
      ))}

      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p className='monthss'>{month}</p>
      </Modal>
    </div>
  )
};


Sidebar.propTypes = {
  active: PropTypes.bool,
  onClose: PropTypes.func
}


export default Sidebar;
