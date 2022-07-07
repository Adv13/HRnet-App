import logo from "../../assets/wealth_health.jpg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Header({ title, link, linkName }) {
  return (
    <header className="header">
      <img src={logo} alt="logo" />

      <div className="title">
        <h1>HRnet</h1>
        <Link className="homeLink" to="/employees">View Current Employees</Link>
      </div>
      
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  linkName: PropTypes.string,
};

export default Header;