import { Link } from "react-router-dom";


const NotFound = () => {
  return (
    <div className="notfound">
      <h1>Page not found, Invalid URL</h1>
      <Link to="/">Go back to home page</Link>
    </div>
  )
};

export default NotFound;
