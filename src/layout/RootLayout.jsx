import { Link, NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="root-layout">
        <header>
            <nav>
                <Link to="/"><h2>Birthday Notifier</h2></Link>
                <NavLink to="/">Home</NavLink>
                <NavLink to="upcoming">Upcoming</NavLink>
                <NavLink to="peoples">Peoples</NavLink>
            
            </nav>
        </header>

        <main>
            <Outlet/>
        </main>
    </div>
  )
};

export default RootLayout;
