import MenuElement from "../MenuElement/MenuElement";

import tacos from "../../assets/images/tacos.jpg";
import balls from "../../assets/images/balls.jpg";
import biriyani from "../../assets/images/biriyani.jpg";
import beef from "../../assets/images/beef.jpg";
import grill from "../../assets/images/grill.jpg";
import noodles from "../../assets/images/noodles.jpg";
import mutta from "../../assets/images/mutta.jpg";
import green from "../../assets/images/green.jpg";
import kadai from "../../assets/images/kadai.jpg";

function Menu() {
  return (
    <section className="Menu" name="menu">
      <div className="menuHeader">
        <p>Specialities</p>
        <h1>Our Menu</h1>
      </div>
      <div className="menuContents">
        <div className="menuList">
          <h1>Breakfast</h1>
          <MenuElement
            label="Nachos"
            price="90.00"
            des="Good nachos with cheese spread"
            img={tacos}
          />
          <MenuElement
            label="Fried balls"
            price="90.00"
            des="Delicious fried meat balls with mayo!"
            img={balls}
          />

          <MenuElement
            label="Salad"
            price="90.00"
            des=" A nutricious bowl of salad"
            img={green}
          />
        </div>
        <div className="menuList">
          <h1>Lunch</h1>

          <MenuElement
            label="Biriyani"
            price="90.00"
            des="A spicy and delicious Indian dish! "
            img={biriyani}
          />

          <MenuElement
            label="Beef steak"
            price="90.00"
            des="Processed beef steak"
            img={beef}
          />
          <MenuElement
            label="Chicken Gravy"
            price="90.00"
            des="A nice chicken Gravy"
            img={kadai}
          />
        </div>
        <div className="menuList">
          <h1>Dinner</h1>
          <MenuElement
            label="Chicken"
            price="90.00"
            des="A spicy Chicken roast !"
            img={grill}
          />
          <MenuElement
            label="Ramen"
            price="90.00"
            des="A delicious dry ramen with egg"
            img={noodles}
          />
          <MenuElement
            label="Egg"
            price="90.00"
            des="Eggsotic! just plain and complex!!"
            img={mutta}
          />
        </div>
      </div>
    </section>
  );
}

export default Menu;
