import React, { useEffect, useState } from "react";
import CakeCard from "./CakeCard";
import "./CakesGallery.css";
import { db } from "./../../firebase";

export default function Main() {
  const [cakes, setCakes] = useState([]);

  useEffect(() => {
    db.collection("cakes").onSnapshot((snapshot) => onSnapshot(snapshot));
  }, []);

  const onSnapshot = (snapshot) => {
    setCakes(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }))
    );
  };

  return (
    <div class="CakesGallery_container">
      {cakes &&
        cakes.map(({ id, data: { name, price, imgSrc, description } }) => (
          <CakeCard
            key={id}
            cakeName={name}
            price={price}
            imgSrc={imgSrc}
            description={description}
          />
        ))}
    </div>
  );
}
