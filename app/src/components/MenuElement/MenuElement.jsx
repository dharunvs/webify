function MenuElement({ label, price, des, img }) {
  return (
    <div className="MenuElement">
      <div className="imgContainer">
        <img src={img} alt="" />
      </div>
      <div>
        <p>{label}</p>
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
