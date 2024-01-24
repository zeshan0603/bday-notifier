import PropTypes from 'prop-types'

import FilteredCard from './FilteredCard.jsx';


let userData;
if (localStorage.getItem("userData") == null) {
  userData = [];
} else {
  userData = JSON.parse(localStorage.getItem("userData"));
}


const Modal = ({monthFromBtn,closeModal}) => {
    let monthL = monthFromBtn;
    const filterData= (user)=>{
        return user.bMonth===monthL;
      }
    const dataToDisplay = userData.filter((user)=>filterData(user))
    console.log(dataToDisplay)


  return (
    <div className="modalContainer">
        <h1>{monthL}</h1>
        <button className="close-modal" onClick={()=>closeModal(false)}>&#x2716;</button>
        <FilteredCard dataToDisplay={dataToDisplay}/>
    </div>
  )
};

Modal.propTypes={
    monthFromBtn:PropTypes.string,
    closeModal: PropTypes.func
}


export default Modal;
