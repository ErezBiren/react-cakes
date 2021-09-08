import { cartActions } from "../../store/cart-Slice";
import { useSelector, useDispatch } from "react-redux";
import Drawer from "@material-ui/core/Drawer";
import CartProduct from "./CartProduct";
import styles from "./CartDrawer.module.css";
import { RootState } from "../../store/store";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default function CartDrawer() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const isDrawerOpen = useSelector(
    (state: RootState) => state.cart.isDrawerOpen
  );
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

  const handleCloseDrawer = () => (event: { type: string; key: string }) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    dispatch(cartActions.toggleCartDrawer(false));
  };

  const handleViewCartClick = () => {};

  // todo : handle empty cart - עדלת הקניות ריקה
  return (
    <div>
      <Drawer anchor="left" open={isDrawerOpen} onClose={handleCloseDrawer()}>
        <div className={styles.main}>
          <div className={styles.header}>
            <h2>סל הקניות</h2>
          </div>

          <div className={styles.carts}>
            {cartItems.map((item) => (
              <CartProduct key={item.cakeData.id} cartItem={item} />
            ))}
          </div>

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
      </Drawer>
    </div>
  );
}
