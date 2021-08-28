import Navbar from "../components/Navbar";
import {
  About,
  Home,
  Menu,
  Reservation,
  SpecialDishes,
  Team,
  HappyCustomer,
  Footer,
} from "../components/PageComponents";

function Index() {
  return (
    <div className="Index">
      <Navbar />
      <Home />
      <About />
      <SpecialDishes />
      <Menu />
      <HappyCustomer />
      <Team />
      <Reservation />
      <Footer />
    </div>
  );
}

export default Index;
