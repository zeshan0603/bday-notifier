import { useEffect, useState } from 'react';
import userData from '../assets/db.js'
import Cards from './Cards.jsx';
import Pagination from './Pagination.jsx';




const Peoples = () => {

  const [cards,setCards] = useState([]);
  const [currentPage,setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(6);

  useEffect(()=>{
    setCards(userData);
  },[])

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard,indexOfLastCard)

  
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
   <div className='peopleContainer'>
    <Cards cards={currentCards}/>
    <Pagination cardsPerPage={cardsPerPage} totalCards={cards.length} paginate={paginate}/>
   </div>

  )
};

export default Peoples;
