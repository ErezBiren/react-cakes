import React, { useEffect, useState } from "react";
import CakeCard from "./CakeCard";
import "./CakesGallery.css";
import { db } from "./../../firebase";
import { useSelector } from "react-redux";

export default function Main() {
  const cakes = useSelector((state) => state.cakes.cakes);

  useEffect(() => {
    if (cakes.length === 0) {
    }

    //db.collection("cakes").onSnapshot((snapshot) => onSnapshot(snapshot));
  }, []);

  // const onSnapshot = (snapshot) => {
  //   setCakes(
  //     snapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       data: doc.data(),
  //     }))
  //   );
  // };

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
