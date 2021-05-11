import React from "react";
import cakeTemplate from "./../assets/cakeTemplate.jpg";
import CardInfo from "./CardInfo";
import "./CakeCard.css";

export default function CakeCard({cakeName, price}) {
  return (
    <div class="CakeCard_container">
      
        <img src={cakeTemplate}/>
      
      <CardInfo cakeName={cakeName} price={price}/>

    </div>
  );
}
