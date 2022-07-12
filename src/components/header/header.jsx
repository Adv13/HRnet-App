import logo from "../../assets/wealth_health.jpg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Header({ title, link, linkName }) {
  return (
    <header className="header">
      <Link className="homeLink" to="/">
        <img src={logo} alt="logo" />
      </Link>
      

      <div className="title">
        <h1>{title}</h1>
        <Link className="listLink" to={link}>{linkName}</Link>
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