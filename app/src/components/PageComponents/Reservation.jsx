import reservation from "../../assets/images/reservation.jpg";

function Reservation() {
  return (
    <div className="Reservation" name="reservation">
      <form
        method="POST"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="reservationHeader">
          <p>Reservation</p>
          <h1>Book Now</h1>
        </div>
        <input placeholder="Name" type="text" />

        <input placeholder="Email" type="email" />

        <input placeholder="Phone" type="number" />
        <input placeholder="Date" type="date" />
        <input placeholder="Time" type="time" />
        <input placeholder="Person" type="number" />
        <textarea placeholder="Message" type="text" />
        <input type="submit"></input>
      </form>
      <img src={reservation} alt="" />
    </div>
  );
}

export default Reservation;
