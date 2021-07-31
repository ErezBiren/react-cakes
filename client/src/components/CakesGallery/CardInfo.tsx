import BuyArea from "./BuyArea";
import "./CardInfo.css";

 const CardInfo:React.FC<{cakeName: string, price:number, description:string}>  = ({ cakeName, price, description })=> {
  return (
    <div className="card_info">
      <h2> {cakeName} </h2>
      {<h4> {description} </h4>}
      <BuyArea price={price} />
    </div>
  );
}

export default CardInfo;