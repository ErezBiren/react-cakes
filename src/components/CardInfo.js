import React from "react";
import './CardInfo.css';

export default function CardInfo({ cakeName,price }) {
  return (
    <div class="card_info">
      <h2> { cakeName  } </h2>
      <h4>  סוכר, גבינה    </h4>
      <h3> שח { price }   </h3>
      <button>הוספה לעגלה</button>
    </div>
  );
}
