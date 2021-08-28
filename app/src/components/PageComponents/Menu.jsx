import MenuElement from "../MenuElement/MenuElement";

import tacos from "../../assets/images/tacos.jpg";

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
            label="Pepper Soup"
            price="90.00"
            des="Grated Cheese"
            img={tacos}
          />
          <MenuElement
            label="Pepper Soup"
            price="90.00"
            des="Grated Cheese"
            img={tacos}
          />
          <MenuElement
            label="Pepper Soup"
            price="90.00"
            des="Grated Cheese"
            img={tacos}
          />
        </div>
        <div className="menuList">
          <h1>Lunch</h1>
          <MenuElement
            label="Pepper Soup"
            price="90.00"
            des="Grated Cheese"
            img={tacos}
          />
          <MenuElement
            label="Pepper Soup"
            price="90.00"
            des="Grated Cheese"
            img={tacos}
          />
          <MenuElement
            label="Pepper Soup"
            price="90.00"
            des="Grated Cheese"
            img={tacos}
          />
        </div>
        <div className="menuList">
          <h1>Dinner</h1>
          <MenuElement
            label="Pepper Soup"
            price="90.00"
            des="Grated Cheese"
            img={tacos}
          />
          <MenuElement
            label="Pepper Soup"
            price="90.00"
            des="Grated Cheese"
            img={tacos}
          />
          <MenuElement
            label="Pepper Soup"
            price="90.00"
            des="Grated Cheese"
            img={tacos}
          />
        </div>
      </div>
    </section>
  );
}

export default Menu;
