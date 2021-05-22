import React from "react";
import Header from "./components/Header";
import Main from "./components/CakesGallery/CakesGallery";
import CakeForm from "./components/CakeForm";

import "./style.css";

export default function App() {
  return (
    <div>
      <Header />
      <Main />
      <CakeForm />
    </div>
  );
}
