import PropTypes from 'prop-types'

const Cards = ({cards}) => {
  return (
    <div className='people'>
      {cards.map((user) => (
        <div className="user" key={user.id}>
          <img src={user.imgUrl} />
          <p>{user.name}</p>
        </div>
      ))}
    </div>
  )
};

Cards.propTypes = {
     cards : PropTypes.array
}


export default Cards;
