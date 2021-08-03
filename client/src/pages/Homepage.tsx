import Header from "../components/Header";
import Home from "../components/Home";
import CakesGallery from "../components/CakesGallery/CakesGallery";
import About from "../components/About";

export default function Homepage() {
  return (
    <>
      <Header />
      <Home />
      <CakesGallery />
      <About />
    </>
  );
}
