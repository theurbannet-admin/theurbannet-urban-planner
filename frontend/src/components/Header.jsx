import { Link } from "react-router-dom";
import logo from "../assets/urbannet-logo-black.png";
import "./Header.css"; // 

function Header() {
  return (
    <header className="site-header">
      <Link to="/" className="logo-link">
        <img src={logo} alt="The Urbannet Logo" className="logo-image" />
      </Link>

      <nav className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/dashboard" className="nav-link">
          Dashboard
        </Link>
        <Link to="/customer_dashboard" className="nav-link">
          Customer Dashboard
        </Link>
        <Link to="/provider_dashboard" className="nav-link">
          Provider Dashboard
        </Link>
        {/* <Link to="/marketplace" className="nav-link">
          Marketplace
        </Link> */}
      </nav>

        <Link to="/login" className="nav-button">
          Log In/ Sign Up
        </Link>
    </header>
  );
}

export default Header;