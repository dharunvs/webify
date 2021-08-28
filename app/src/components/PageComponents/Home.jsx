import Symbols from "../Symbols";
import homeBanner1 from "../../assets/images/homeBanner1.jpg";

function Home() {
  return (
    <section className="Home" name="home">
      <div className="homeLeft">
        <h1>
          We Love <br />
          Delicious Foods!
        </h1>
        <div className="buttonsContainer">
          <button className="defaultButton">Explore Menu</button>
          <button className="playVideo">
            <Symbols.PlayVideo size="28" /> Play Video
          </button>
        </div>
        <div className="homeMiniCards">
          <div>
            <div className="homeIcon">
              <Symbols.Search size="40" />
            </div>
            <p>
              Fast <br /> Delivery
            </p>
          </div>
          <div>
            <div className="homeIcon">
              <Symbols.Search size="40" />
            </div>
            <p>
              Fresh and Satisfying <br /> Food
            </p>
          </div>
          <div>
            <div className="homeIcon">
              <Symbols.Search size="40" />
            </div>
            <p>
              Chat and <br /> Order
            </p>
          </div>
        </div>
      </div>
      <div className="homeRight">
        <div className="imgContainer">
          <img src={homeBanner1} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Home;
