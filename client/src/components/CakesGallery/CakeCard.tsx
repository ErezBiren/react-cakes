import CardInfo from "./CardInfo";
import styles from "./CakeCard.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { CakeData } from "../../store/cakes-Slice";

export default function (cakeData: CakeData) {
  const isAdmin = useSelector((state: RootState) => state.auth.isAdmin);

  return (
    <div className={styles.CakeCard_container}>
      <img src={cakeData.imageSource} />
      <CardInfo cakeData={cakeData} />
    </div>
  );
}
