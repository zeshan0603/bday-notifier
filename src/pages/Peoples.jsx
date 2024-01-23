import userData from '../assets/db.js'




const Peoples = () => {
  return (
    <div className='people'>
      {userData.map((user) => (
        <div className="user" key={user.id}>
          <img src={user.imgUrl} />
          <p>{user.name}</p>
        </div>
      ))}
    </div>
  )
};

export default Peoples;
