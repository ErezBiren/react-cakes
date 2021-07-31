import CardInfo from "./CardInfo";
import "./CakeCard.css";
import TaskbarIcons from "./TaskbarIcons";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { CakeData } from "../../store/cakes-Slice";

export default function ({
  name,
  price,
  id:cakeId ,
  imgSrc,
  description,
} : CakeData)  {
  const isAdmin = useSelector((state : RootState) => state.admin.isAdmin);

  return (
    <div className="CakeCard_container">
      {isAdmin && (
        <div className="taksbar_wrapper">{<TaskbarIcons cakeId={cakeId} />}</div>
      )}
      {<img src={imgSrc} />}
      <CardInfo cakeName={name} price={price} description={description} />
    </div>
  );
}
