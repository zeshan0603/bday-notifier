import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import Countdown from 'react-countdown';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import userData from '../assets/db.js'
import month from '../assets/month.js';

// Import Swiper styles
import 'swiper/css';

const Upcoming = () => {
  
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  const createUserDate = (user) => {
    let date = new Date(`${user.bMonth} ${user.bDate}, ${new Date().getFullYear()}`).toLocaleDateString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
    return date
  };

  const compareDates = (d1) => {
    let date1 = new Date(d1);
    let currentDate = new Date(formattedDate);
    if (date1 >= currentDate) {
      let nextMonthDate = new Date(currentDate);
      nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
      if (date1 < nextMonthDate) {
        return true;
      }
    }
    return false;
  };
  

  const upcomingArr = userData.filter((user) => compareDates(createUserDate(user)));



  upcomingArr.sort((a, b) => {
    const date1 = new Date(createUserDate(a));
    const date2 = new Date(createUserDate(b));
    return date1 - date2;
  });

  const renderer =({days,hours,minutes,seconds,completed})=>{
    if(!completed){
      return (
        <div className='countdown'>
            <div>
              <span>Time Left: </span>
              <span>{days} days </span>
              <span>and {hours}:</span>
              <span>{minutes}:</span>
              <span>{seconds}</span>
            </div>
            
        </div>
      )
    }
  }
  
  return (
    <Swiper
    modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    loop
    autoplay={{
      delay:3500,
     stopOnLastSlide: false,
    }}
    >
      {upcomingArr.map((user) => (
        <SwiperSlide key={user.id}>
          <div className='upcoming-user'>
            <img src={user.imgUrl} />
            <p>{user.name}</p>
            <p>Birth Date : {user.bDate}/{user.bMonth}</p>
            <Countdown date={createUserDate(user)} renderer={renderer}/>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
};

export default Upcoming;
