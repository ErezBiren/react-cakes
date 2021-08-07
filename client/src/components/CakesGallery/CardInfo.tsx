import { CakeData } from "../../store/cakes-Slice";
import BuyArea from "./BuyArea";
import styles from "./CardInfo.module.css";

const CardInfo: React.FC<{ cakeData: CakeData }> = ({ cakeData }) => {
  return (
    <div className={styles.card_info}>
      <h2> {cakeData.name} </h2>
      {<h4> {cakeData.description} </h4>}
      <BuyArea cakeData={cakeData} />
    </div>
  );
};

export default CardInfo;
