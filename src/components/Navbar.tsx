import "../styles/nav.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link className="links" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="links" to="/detection">
            Detection
          </Link>
        </li>
        <li>
          <Link className="links" to="#">
            Payments
          </Link>
        </li>
        <li>
          <Link to="#" className="links">
            About Us
          </Link>
        </li>
        <li>
          <Link to="#" className="links">
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
