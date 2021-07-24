import React from "react";
import CardInfo from "./CardInfo";
import "./CakeCard.css";
import TaskbarIcons from "./TaskbarIcons";
import { useSelector } from "react-redux";

export default function CakeCard({
  cakeName,
  price,
  cakeId,
  imgSrc,
  description,
}) {
  const isAdmin = useSelector((state) => state.admin.isAdmin);

  return (
    <div class="CakeCard_container">
      {isAdmin && (
        <div class="taksbar_wrapper">{<TaskbarIcons cakeId={cakeId} />}</div>
      )}
      {<img src={imgSrc} />}
      <CardInfo cakeName={cakeName} price={price} description={description} />
    </div>
  );
}
