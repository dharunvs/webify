import hc from "../../assets/images/hc.jpg";

function HappyCustomer() {
  return (
    <div className="HappyCustomer">
      <div className="hccontent">
        <div className="hcheader">
          <p>Testimony</p>
          <h1>Happy Customer</h1>
        </div>
        <h1
          style={{
            fontFamily: "serif",
            textAlign: "center",
            fontSize: "200px",
            margin: "0px",
            padding: "0px",
            transform: "translateY(-30%)",
          }}
        >
          “
        </h1>
        <p className="p1">
          I had lunch with some of my coleagues at Echo on Day 1. I had the
          wedge salad - it was delicious. On Night 2, I enjoyed a drink at the
          bar. I had a Margarita. The service was excellent.
        </p>

        <p className="p2">Centigrade</p>
        <p className="p3">
          Web developer <span>Centigrade</span>
        </p>
      </div>
      <div className="imgContainer">
        <div className="black"></div>
        <img src={hc} alt="" />
      </div>
    </div>
  );
}

export default HappyCustomer;
