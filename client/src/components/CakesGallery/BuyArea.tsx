import React from "react";
import "./BuyArea.css";

const BuyArea:React.FC<{price:number}> = ({ price }) => {
  return (
    <div className="buyArea_container">
      <h3> {price} ש"ח</h3>
      {/* <button>הוספה לעגלה</button> */}
    </div>
  );
}

export default BuyArea;
