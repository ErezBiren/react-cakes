import About from "../components/About";
import CakesGallery from "../components/CakesGallery/CakesGallery";
import CartDrawer from "../components/Cart/CartDrawer/CartDrawer";
import Header from "../components/Header/Header";
import Home from "../components/Home";

export default function HomePage() {
  return (
    <>
      <Header />
      <Home />
      <CartDrawer />
      <CakesGallery />
      <About />
    </>
  );
}
