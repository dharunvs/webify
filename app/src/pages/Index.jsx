import Navbar from "../components/Navbar";
import {
  About,
  Home,
  Menu,
  Reservation,
  SpecialDishes,
  Team,
} from "../components/PageComponents";

function Index() {
  return (
    <div className="Index">
      <Navbar />
      <Home />
      <About />
      <SpecialDishes />
      <Menu />
      <Team />
      <Reservation />
    </div>
  );
}

export default Index;
