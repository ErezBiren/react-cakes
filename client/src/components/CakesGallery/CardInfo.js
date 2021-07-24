import { Description } from "@material-ui/icons";
import React from "react";
import BuyArea from "./BuyArea";
import "./CardInfo.css";




export default function CardInfo({ cakeName, price, description }) {
  return (
    <div class="card_info">
      <h2> {cakeName} </h2>
      {<h4> {description} </h4>}
      <BuyArea price={price} />
    </div>
  );
}
