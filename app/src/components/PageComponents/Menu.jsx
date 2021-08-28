import MenuElement from "../MenuElement/MenuElement";

import tacos,balls,beef,biriyani,green,grill,kadai,kari,mutta,noodles,rea,salad,tac,chicken,urunda,terila,burger from "../../assets/images/tacos.jpg";

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
            label="nachos"
            price="90.00"
            des="Good nachos"
            img={tacos}
          />
          <MenuElement
            label="fried balls"
            price="90.00"
            des="fried balls"
            img={balls}
          />
          
         
         <MenuElement
            label="salad"
            price="90.00"
            des="salad"
            img={green}
          />
       
          <h1>Lunch</h1>
          
          <MenuElement
            label="biriyani"
            price="90.00"
            des="biriyani"
            img={biriyani}
          />
         
         
           <MenuElement
           label="processed beef"
           price="90.00"
           des="processed beef"
           img={beef}
         />
          <MenuElement
           label="gravy"
           price="90.00"
           des="gravy"
           img={kadai}
         />
        </div>
        <div className="menuList">
          <h1>Dinner</h1>
          <MenuElement
            label="Chicken"
            price="90.00"
            des="Chicken"
            img={grill}
          />
          <MenuElement
            label="Ramen"
            price="90.00"
            des="Ramen"
            img={noodles}
          />
          <MenuElement
            label="egg"
            price="90.00"
            des="egg"
            img={mutta}
          />
        </div>
      </div>
    </section>
  );
}

export default Menu;
