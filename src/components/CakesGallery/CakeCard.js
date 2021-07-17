import React from "react";
import CardInfo from "./CardInfo";
import "./CakeCard.css";
import TaskbarIcons from "./TaskbarIcons";

export default function CakeCard({
  cakeName,
  price,
  cakeId,
  imgSrc,
  description,
}) {
  return (
    <div class="CakeCard_container">
      {/* <div class="taksbar_wrapper">{<TaskbarIcons cakeId={cakeId} />}
      </div> */}
      {<img src={imgSrc} />}
      <CardInfo cakeName={cakeName} price={price} description={description} />
    </div>
  );
}
