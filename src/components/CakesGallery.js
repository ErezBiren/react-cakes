import React from "react";
import CakeCard from "./CakeCard";
import "./CakesGallery.css";
import { useSelector } from "react-redux";

export default function Main() {
  const cakes = useSelector((state) => state.cakes);

  return (
    <div class="CakesGallery_container">
      {cakes &&
        cakes.cakes.map((d) => (
          <CakeCard cakeName={d.name} price={d.price} cakeId={d.id} />
        ))}
    </div>
  );
}
