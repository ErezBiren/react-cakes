import React from "react";
import CardInfo from "./CardInfo";
import "./CakeCard.css";

export default function CakeCard({cakeName, price}) {
  return (
    <div class="CakeCard_container">

            <img src="https://lh3.googleusercontent.com/proxy/twLsX3jjOUr1JKyxii9q2Y50Ot9dH8zqI3QONDVCewO0u4Pn95KR6NykLlvl22HiBMKdGwdZxP8pzn26aWm9LefLlX1ik4h69BM2"/>
      
      <CardInfo cakeName={cakeName} price={price}/>

    </div>
  );
}
