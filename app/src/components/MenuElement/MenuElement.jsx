function MenuElement({ label, price, des, img }) {
  return (
    <div className="MenuElement">
      <div className="imgContainer">
        <img src={img} alt="" />
      </div>
      <div>
        <h3>{label}</h3>
        <p>{des}</p>
      </div>
      <p>
        Rs <br />
        {price}
      </p>
    </div>
  );
}

export default MenuElement;
