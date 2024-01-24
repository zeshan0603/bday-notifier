import PropTypes from 'prop-types'

const FilteredCard = ({dataToDisplay}) => {
  return (
    <div className='filteredCards'>
      {dataToDisplay.map((user) => (
        <div className="user" key={user.id}>
          <img src={user.imgUrl} />
          <p>{user.name}</p>
            <div>
                <span>BirthDate : </span>
                <span>{user.bDate}/{user.bMonth}</span>
            </div>
        </div>
      ))}
    </div>
  )
};

FilteredCard.propTypes = {
     dataToDisplay : PropTypes.array
}


export default FilteredCard;
