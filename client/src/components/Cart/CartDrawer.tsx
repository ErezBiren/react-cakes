import { cartActions } from "../../store/cart-Slice";
import { useSelector, useDispatch } from "react-redux";
import Drawer from "@material-ui/core/Drawer";
import CartProduct from "./CartProduct";
import styles from "./CartDrawer.module.css";
import { RootState } from "../../store/store";
import CartBottomArea from "./CartBottomArea";

export default function CartDrawer() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const isDrawerOpen = useSelector(
    (state: RootState) => state.cart.isDrawerOpen
  );

  const totalQuantity = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );

  const handleCloseDrawer = () => (event: { type: string; key: string }) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    dispatch(cartActions.toggleCartDrawer(false));
  };

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

          {totalQuantity > 0 ? (
            <CartBottomArea />
          ) : (
            <div className={styles.emptyCart}>
              <h2>עגלת הקניות ריקה</h2>
            </div>
          )}
        </div>
      </Drawer>
    </div>
  );
}
