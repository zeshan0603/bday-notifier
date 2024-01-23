import { Swiper, SwiperSlide } from 'swiper/react';
import userData from '../assets/db.js'

// Import Swiper styles
import 'swiper/css';

const Upcoming = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
    >
      {userData.map((user) => (
        <SwiperSlide key={user.id}>
          <div className='upcoming-user'>
            <img src={user.imgUrl} />
            <p>{user.name}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
};

export default Upcoming;
