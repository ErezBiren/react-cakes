import React, { useEffect, useState } from "react";
import CakeCard from "./CakeCard";
import "./CakesGallery.css";
import { useSelector } from "react-redux";

export default function CakesGallery() {
  const cakes = useSelector((state) => state.cakes.cakes);

  return (
    <div class="CakesGallery_container">
      {cakes &&
        cakes.map(({ id, name, price, imgSrc, description }) => (
          <CakeCard
            key={id}
            cakeId={id}
            cakeName={name}
            price={price}
            imgSrc={imgSrc}
            description={description}
          />
        ))}
    </div>
  );
}
