import PropTypes from 'prop-types'

const TodayCard = ({user}) => {
  return (
    <div className="today-Card">
     <img src={user.imgUrl}/>
     <p>{user.name}</p>
    </div>
  )
};

TodayCard.propTypes = {
    user : PropTypes.object
}


export default TodayCard;