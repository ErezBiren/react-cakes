import React from "react";
// import cakeTemplate from "./../../../assets/cakeTemplate.jpg";
import CardInfo from "./CardInfo";
import "./CakeCard.css";
import TaskbarIcons from "./TaskbarIcons";

export default function CakeCard({ cakeName, price, cakeId }) {
  return (
    <div class="CakeCard_container">
      <div class="taksbar_wrapper">
      <TaskbarIcons cakeId={cakeId} />
      </div>
      {/* <img src={cakeTemplate} /> */}
      <CardInfo cakeName={cakeName} price={price} />
    </div>
  );
}
