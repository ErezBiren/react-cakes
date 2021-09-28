import { useSelector } from "react-redux";

import { CakeData } from "../../store/cakes-Slice";
import { RootState } from "../../store/store";
import styles from "./CakeCard.module.css";
import CardInfo from "./CardInfo";

export default function (cakeData: CakeData) {
  const isAdmin = useSelector((state: RootState) => state.auth.isAdmin);

  return (
    <div className={styles.CakeCardContainer}>
      <img src={cakeData.imageSource} />
      <CardInfo cakeData={cakeData} />
    </div>
  );
}
