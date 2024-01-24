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
      const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
    }

  return (
    <div className="root-layout">
      <header>
        <nav>
        <button className="open-btn" onClick={sidebarToggle}>▶</button>
          <div className="navbar-container">
            <Sidebar active={sideBar} onClose={closeSidebar} />
            <Link to="/"><h2 className="logo">Birthday Notifier</h2></Link>
            <div className="menu-icon" onClick={handleShowNavbar}>
            ☰
            </div>
            <div className={`nav-links  ${showNavbar && 'active'}`}>
            <NavLink to="/" onClick={handleShowNavbar}>Home</NavLink>
            <NavLink to="upcoming"onClick={handleShowNavbar}>Upcoming</NavLink>
            <NavLink to="peoples"onClick={handleShowNavbar}>Peoples</NavLink>
          </div>
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
};

export default RootLayout;
