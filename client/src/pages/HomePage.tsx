import Header from "../components/Header";
import Home from "../components/Home";
import CakesGallery from "../components/CakesGallery/CakesGallery";
import About from "../components/About";
import CartDrawer from "../components/Cart/CartDrawer";

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
