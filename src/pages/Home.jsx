import { useEffect, useState } from "react";
import TodayCard from "../Components/TodayCard";


let userData;
if (localStorage.getItem("userData") == null) {
  userData = [];
} else {
  userData = JSON.parse(localStorage.getItem("userData"));
}


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
    return (
      date1.getDate() === currentDate.getDate() &&
      date1.getMonth() === currentDate.getMonth() &&
      date1.getFullYear() === currentDate.getFullYear()
    );
  };

  const todayBday = userData.filter((user) => compareDates(createUserDate(user)));
  

const Home = () => {

    const [time,setTime] = useState(new Date());
    useEffect(()=>{
        setInterval(()=>setTime(new Date()),1000)
    },[])


    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

  return (
    <div className="home">
      <h1>Welcome to the Birthday Notifier</h1>
      <h2>Todays Date is : {today}</h2>
      <h2>Current time : {time.toLocaleTimeString()}</h2>
      

      {
      todayBday.length>0? 
      <>
      <h2>Todays Bday</h2> 
      <div className="todayContainer">
      {
        todayBday.map((user) => (
          <TodayCard user={user} key={user.id}/>
        ))
      }
      </div>
      </> 
      :<h1>No Birthday today</h1>
      }

    </div>
  )
};

export default Home;
