import { cartActions } from "../../store/cart-Slice";
import { useSelector, useDispatch } from "react-redux";
import Drawer from "@material-ui/core/Drawer";
import CartProduct from "./CartProduct";
import styles from "./CartDrawer.module.css";

export default function CartDrawer() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const isDrawerOpen = useSelector((state) => state.cart.isDrawerOpen);

  const toggleDrawer = (open) => (event) => {
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
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <div>
          <div className={styles.header}>סל הקניות</div>
          {cartItems.map((item, index) => (
            <CartProduct cartItem={item} />
          ))}
        </div>
      </Drawer>
    </div>
  );
}
