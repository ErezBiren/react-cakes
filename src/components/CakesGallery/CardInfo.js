import React from "react";
import BuyArea from "./BuyArea";
import './CardInfo.css';

export default function CardInfo({ cakeName,price }) {
  return (
    <div class="card_info">
      <h2> { cakeName  } </h2>
      <h4>  סוכר, גבינה    </h4>
     <BuyArea price={price}/>
    </div>
  );
}
