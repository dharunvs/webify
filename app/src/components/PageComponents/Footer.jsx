import fb from "../../assets/svgs/facebook.svg";
import insta from "../../assets/svgs/instagram.svg";
import tw from "../../assets/svgs/twitter.svg";
import logo from "../../assets/images/logo.png";

function Footer() {
  return (
    <div className="Footer">
      <div>
        <div className="footerLeft">
          <img src={logo} alt="" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
            fugit voluptas eum cumque accusamus libero minus reiciendis omnis
            nam iste culpa eligendi porro dolorem laboriosam, alias consectetur
            sint vitae in?
          </p>
          <div>
            <img className="socialIconsfb" src={fb} alt="" />
            <img className="socialIcons" src={tw} alt="" />
            <img className="socialIcons" src={insta} alt="" />
          </div>
        </div>
        <div className="footerRight">
          <h1>Open Hours</h1>
          <div className="timetable">
            <div>
              <p>Monday</p>
              <p>Tuesday</p>
              <p>Wednesday</p>
              <p>Thursday</p>
              <p>Friday</p>
              <p>Saturday</p>
              <p>Sunday</p>
            </div>

            <div>
              <p>9:00 - 24:00</p>
              <p>9:00 - 24:00</p>
              <p>9:00 - 24:00</p>
              <p>9:00 - 24:00</p>
              <p>9:00 - 02:00</p>
              <p>9:00 - 02:00</p>
              <p>Closed</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>
          Copyright 2021. All Rights Reserved. Design by{" "}
          <span style={{ color: "red" }}>Centigrade</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
