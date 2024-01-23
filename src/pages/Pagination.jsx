import PropTypes from 'prop-types'
const Pagination = ({cardsPerPage,totalCards, paginate}) => {

    const pageNumbers = [];

    for(let i=1;i<=Math.ceil(totalCards/cardsPerPage);i++){
        pageNumbers.push(i);
    }
  return (
    <div>
      <div className="pagination">
        {pageNumbers.map((pageNum)=>(
                <a onClick={()=> paginate(pageNum)} href="#" key={pageNum} className="page-item">
                    {pageNum}
                </a>
        ))}
      </div>
    </div>
  )
};

Pagination.propTypes = {
   cardsPerPage : PropTypes.number,
   totalCards : PropTypes.number,
   paginate : PropTypes.func
}

export default Pagination;
