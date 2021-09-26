import IconButton from "@material-ui/core/IconButton";
import { AccountCircle } from "@material-ui/icons";
import { PersonOutlineSharp } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { cartActions } from "../../store/cart-Slice";
import { RootState } from "../../store/store";
import CartIcon from "../Cart/CartIcon";
import styles from "./Header.module.css";
import NavBar from "./NavBar";

const Header = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const isDrawerOpen = useSelector(
    (state: RootState) => state.cart.isDrawerOpen
  );
  const dispatch = useDispatch();

  const handleCartIconClick = () => {
    dispatch(cartActions.toggleCartDrawer(!isDrawerOpen));
  };

  return (
    <section className={styles.header_container}>
      <div className={styles.header}>
        <div className={styles.other}>
          <div className={styles.cartIcon}>
            <IconButton onClick={handleCartIconClick}>
              <CartIcon />
            </IconButton>
          </div>

          {!isLoggedIn && (
            <div className={styles.login}>
              <PersonOutlineSharp />

              <Link to="/auth">התחברות</Link>
            </div>
          )}
        </div>

        <div className={styles.navBar}>
          <NavBar />
        </div>
      </div>
    </section>
  );
};

export default Header;
