import "../styles/nav.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <ul>
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/detection">
            Detection
          </Link>
        </li>
        <li>
          <Link className="link" to="#">
            Payments
          </Link>
        </li>
        <li>
          <Link to="#" className="link">
            About Us
          </Link>
        </li>
        <li>
          <Link to="#" className="link">
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
