import "./Nav.css"
import { Link } from "react-router-dom";

function Nav() {
  return (
      <Link to="/Sign-In" className="header-nav">
         <i className="fa fa-user-circle"></i>
         <p>Sign In</p>
      </Link>
  );
}

export default Nav;