import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import Countdown from 'react-countdown';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// Import Swiper styles
import 'swiper/css';


let userData;
if (localStorage.getItem("userData") == null) {
  userData = [];
} else {
  userData = JSON.parse(localStorage.getItem("userData"));
}


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

    // Get the last day of the current month
    let lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    // Check if the birthday is in the current month or the next month
    if (
      (date1.getMonth() === currentDate.getMonth() && date1.getDate() >= currentDate.getDate()) ||
      (date1.getMonth() === currentDate.getMonth() + 1 && date1.getDate() <= lastDayOfMonth)
    ) {
      return true;
    }
    return false;
  };




  const upcomingArr = userData.filter((user) => compareDates(createUserDate(user)));

  upcomingArr.sort((a, b) => {
    const date1 = new Date(createUserDate(a));
    const date2 = new Date(createUserDate(b));
    return date1 - date2;
  });

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (!completed) {
      return (
        <div className='countdown'>
          {days && hours && minutes && seconds ? (
            <div className='countdown-content'>
              <span>Time Left: </span>
              <span>{days} days </span>
              <span>and {hours}:</span>
              <span>{minutes}:</span>
              <span>{seconds}</span>
            </div>
          ) : (
            <span>Today is their bday</span>
          )}
        </div>
      );
    } else {
      // If completed, you might want to display a different message or nothing at all
      return <div>Today is their bday</div>;
    }
  };
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop
      autoplay={{
        delay: 3000,
        stopOnLastSlide: false,
      }}
    >
      {upcomingArr.map((user) => (
        <SwiperSlide key={user.id}>
          <div className='upcoming-user'>
            <img src={user.imgUrl} />
            <p>{user.name}</p>
            <span>Birth Date : {user.bDate}/{user.bMonth}</span>
            <Countdown date={createUserDate(user)} renderer={renderer} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
};

export default Upcoming;
