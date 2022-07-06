import logo from "../../assets/wealth_health.jpg";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function Header({ title, link, linkName }) {
  return (
    <header className="header">
      <img src={logo} alt="logo" />

      <div className="title">
        <h1>test</h1>
      </div>
      {/* <NavLink to={link}>{linkName}</NavLink> */}
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  linkName: PropTypes.string,
};

export default Header;