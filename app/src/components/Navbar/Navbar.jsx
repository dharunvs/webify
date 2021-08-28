import { Link } from "react-scroll";

function Navbar() {
  const NavLink = ({ label, to }) => (
    <Link
      activeClass="active"
      className="navLink"
      to={to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={400}
      // onClick={() => {
      //   if (to === "home") {
      //     setScrollThumb(100);
      //   } else if (to === "about") {
      //     setScrollThumb(200);
      //   } else if (to === "specialDishes") {
      //     setScrollThumb(300);
      //   } else if (to === "contact") {
      //     setScrollThumb(400);
      //   } else {
      //     setScrollThumb(0);
      //   }

      //   setSection(to);
      //   localStorage.setItem("section", to);
      // }}
    >
      {label}
    </Link>
  );

  return (
    <nav className="Navbar">
      <ul className="navLinks">
        <NavLink label="Home" to="home" />
        <NavLink label="About" to="about" />
        <NavLink label="Special Dishes" to="specialDishes" />
        <NavLink label="Menu" to="menu" />
        <NavLink label="Team" to="team" />
      </ul>
    </nav>
  );
}

export default Navbar;
