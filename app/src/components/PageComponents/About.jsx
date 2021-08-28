import noodles from "../../assets/images/noodles.jpg";
import aboutBanner from "../../assets/images/aboutBanner.jpg";
import grill from "../../assets/images/grill.jpg";
import urunda from "../../assets/images/urunda.jpg";

function About() {
  return (
    <section className="About" name="about">
      <div className="aboutLeft">
        <div className="imgContainer">
          <img src={aboutBanner} className="customimg2" alt="" />
        </div>
      </div>
      <div className="aboutRight">
        <div className="aboutHeader">
          <div>
            <p>About</p>
            <h1>Welcome to KCG Restaurant</h1>
          </div>
          <p>
            On her way she met a copy . The copy warned the Little blind text ,
            that where it came from it would have been rewritten a thousand
            times and Everything that was left from its orgin would be the word
            "and" and the Little blind text should turn around and return to its
            own , safe country . A small river Duden flows by their place and
            supplies it with the necessary regelialia . It is a paradisematic
            country , in which roasted parts of your sentences fly into your
            mouth.
          </p>
        </div>

        <div className="aboutRecipes">
          <h2>Special Recipe</h2>
          <div className="aboutMiniCards">
            <div>
              <div className="imgContainer">
                <img src={urunda} alt="" className="customimg3" />
              </div>
              <p>Pepper Soup</p>
            </div>
            <div>
              <div className="imgContainer">
                <img src={grill} alt="" />
              </div>
              <p>Pepper Soup</p>
            </div>
            <div>
              <div className="imgContainer">
                <img src={noodles} alt="" className="customimg1" />
              </div>
              <p>Pepper Soup</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
