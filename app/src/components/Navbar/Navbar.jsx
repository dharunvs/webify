import { Link } from "react-scroll";
import Symbols from "../Symbols";

function Navbar() {
  const NavLink = ({ label, to }) => (
    <Link
      activeClass="active"
      className="navLink"
      to={to}
      spy={true}
      smooth={true}
      // offset={-70}
      duration={1000}
    >
      {label}
    </Link>
  );

  return (
    <nav className="Navbar">
      <div className="navLinks">
        <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <div className="mainNavLinksLeft">
          <NavLink label="Home" to="app" />
          <NavLink label="About" to="about" />
          <NavLink label="Special Dishes" to="specialDishes" />
        </div>

        <div className="logo">
          <div className="dummyLogo"></div>
        </div>
        <div className="mainNavLinksRight">
          <NavLink label="Menu" to="menu" />
          <NavLink label="Team" to="team" />
          <NavLink label="Reservation" to="reservation" />
        </div>

        <div className="searchIcon">
          <Symbols.Search size="32" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
