import { CakeData } from "../../store/cakes-Slice";
import BuyArea from "./BuyArea";
import styles from "./CardInfo.module.css";

const CardInfo: React.FC<{ cakeData: CakeData }> = ({ cakeData }) => {
  return (
    <div className={styles.cardInfo}>
      <h3> {cakeData.name} </h3>
      <h4> {cakeData.description} </h4>

      <div className={styles.buyArea}>
        <BuyArea cakeData={cakeData} />
      </div>
    </div>
  );
};

export default CardInfo;
