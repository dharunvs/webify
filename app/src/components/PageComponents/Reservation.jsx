function Reservation() {
  return (
    <form
      method="POST"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input placeholder="Name" type="text" />

      <input placeholder="Email" type="email" />

      <input placeholder="Phone" type="number" />
      <input placeholder="Date" type="date" />
      <input placeholder="Time" type="time" />
      <input placeholder="Person" type="number" />
      <textarea placeholder="Message" type="text" />
      <input type="submit"></input>
    </form>
  );
}

export default Reservation;
