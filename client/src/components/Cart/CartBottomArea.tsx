import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "./CartBottomArea.module.css";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

function CartBottomArea() {

    const handleViewCartClick = () => {};
    const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

    return (
    <div>
      <div className={styles.totalPriceContainer}>
        <h2>סכום ביניים</h2>
        <h2>{totalPrice} ש"ח</h2>
      </div>

      <div className={styles.buttonContainer}>
        <Link to="/cart">
          <Button
            variant="contained"
            color="primary"
            onClick={handleViewCartClick}
          >
            צפייה בסל
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default CartBottomArea;
