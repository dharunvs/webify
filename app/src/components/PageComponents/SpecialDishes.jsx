import pizza from "../../assets/images/pizza.jpg";
import beef from "../../assets/images/beef.jpg";
import { Link } from "react-scroll";

function SpecialDishes() {
  const NavLink = ({ label, to }) => (
    <Link
      activeClass="active"
      // className="defaultButton"
      to={to}
      spy={true}
      smooth={true}
      // offset={-70}
      style={{ marginTop: "40px" }}
      duration={1000}
    >
      {label}
    </Link>
  );
  return (
    <section className="SpecialDishes" name="specialDishes">
      <div className="specialDishesHeader">
        <p>Specialities</p>
        <h1>Special Dishes</h1>
      </div>
      <div className="SpecialDishesGallery">
        <div className="gallery">
          <div className="sd1">
            <h1>01.</h1>
          </div>
          <div className="sd2">
            <h1>Pepper Soup</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              nihil quis ipsam neque commodi, aspernatur quod pariatur harum
              veritatis distinctio libero soluta explicabo blanditiis minus
              corporis dicta sit quidem? Nam.
            </p>
            <h2>Rs 649.00</h2>

            <button className="defaultButton">
              <NavLink label="Book A Table" to="reservation" />
            </button>
          </div>
          <div className="sd3 sd31">
            <div className="imgContainer">
              <img src={pizza} alt="" />
            </div>
          </div>
        </div>
        <div className="gallery">
          <div className="sd3 sd32">
            <div className="imgContainer">
              <img src={beef} alt="" className="customimg43" />
            </div>
          </div>
          <div className="sd1">
            <h1>02.</h1>
          </div>
          <div className="sd2">
            <h1>Pepper Soup</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              nihil quis ipsam neque commodi, aspernatur quod pariatur harum
              veritatis distinctio libero soluta explicabo blanditiis minus
              corporis dicta sit quidem? Nam.
            </p>
            <h2>Rs 649.00</h2>
            <button className="defaultButton">
              <NavLink label="Book A Table" to="reservation" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpecialDishes;
