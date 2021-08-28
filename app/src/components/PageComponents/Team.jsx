import bhatt from "../../assets/images/bhatt.jpg";
import damo from "../../assets/images/damo.jpg";
import ashwin from "../../assets/images/ashwin.jpg";

function Team() {
  return (
    <section className="Team" name="team">
      <div className="teamHeader">
        <p>Cooks</p>
        <h1>Our Team</h1>
      </div>
      <div className="teamContent">
        <div className="teamCard">
          <div className="tCardTop">
            <div>O</div>
            <div>O</div>
            <div>O</div>
          </div>
          <div className="imgContainer">
            <img src={bhatt} alt="" />
          </div>
          <div className="tCardBottom">
            <h2>Venkatesh Bhatt</h2>
            <p>CEO</p>
          </div>
        </div>

        <div className="teamCard">
          <div className="tCardTop">
            <div>O</div>
            <div>O</div>
            <div>O</div>
          </div>
          <div className="imgContainer">
            <img src={damo} alt="" />
          </div>
          <div className="tCardBottom">
            <h2>Damodaran</h2>
            <p>Chef</p>
          </div>
        </div>

        <div className="teamCard">
          <div className="tCardTop">
            <div>O</div>
            <div>O</div>
            <div>O</div>
          </div>
          <div className="imgContainer">
            <img src={ashwin} alt="" />
          </div>
          <div className="tCardBottom">
            <h2>Ashwin Kumar</h2>
            <p>Chef</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
