import { Button } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { RootState } from "../../../store/store";
import styles from "./CartDrawerBottomArea.module.css";

const CartBottomArea = () => {
  const history = useHistory();
  const handleViewCartClick = () => {
    history.push("react-cakes/cart");
  };
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

  return (
    <div className={styles.root}>
      <div className={styles.totalPriceContainer}>
        <h2>סכום ביניים</h2>
        <h2>{totalPrice} ש"ח</h2>
      </div>

      <div className={styles.buttonContainer}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleViewCartClick}
        >
          צפייה בסל
        </Button>
      </div>
    </div>
  );
};

export default CartBottomArea;
