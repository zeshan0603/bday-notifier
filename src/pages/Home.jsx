import { useEffect, useState } from "react";

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
      <h2>Current time :{time.toLocaleTimeString()}</h2>
    </div>
  )
};

export default Home;
