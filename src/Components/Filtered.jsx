import userData from '../assets/db.js'



const Filtered = ({monthFromBtn}) => {
  let monthL = monthFromBtn;
  const filterData= (user)=>{
    return user.bMonth===monthL;
  }
  
  const dataToDisplay = userData.filter((user)=>filterData(user))
  
 console.log(dataToDisplay)

if(!dataToDisplay==[]){
  return(
    <div className='filterContainer'>
      
    </div>
  )
}

};

export default Filtered;
