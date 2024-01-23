import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

const RootLayout = () => {
  const [sideBar, setSideBar] = useState(false);
  const sidebarToggle = () => {
    setSideBar(!sideBar);
    console.log(sideBar)
  }

  const closeSidebar = () => {
    setSideBar(false);
  };
  return (
    <div className="root-layout">
      <header>
        <nav>
          <Sidebar active={sideBar} onClose={closeSidebar} />
          <button className="open-btn" onClick={sidebarToggle}>▶</button>
          <Link to="/"><h2>Birthday Notifier</h2></Link>
          <NavLink to="/">Home</NavLink>
          <NavLink to="upcoming">Upcoming</NavLink>
          <NavLink to="peoples">Peoples</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
};

export default RootLayout;
