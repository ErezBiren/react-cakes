import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { ReactComponent as LoginIcon } from "../assets/icons/login.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import CartIcon from "./Cart/CartIcon";
import IconButton from "@material-ui/core/IconButton";
import { cartActions } from "../store/cart-Slice";
import { AccountCircle } from "@material-ui/icons";

 const Header = ()=> {
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
          <IconButton className={styles.cartIcon} onClick={handleCartIconClick}>
            <CartIcon />
          </IconButton>
          <Link to="/auth">
            {!isLoggedIn && (
              <div className={styles.login}>
                <AccountCircle />
                <h2>התחברות</h2>
              </div>
            )}
          </Link>
        </div>
        <div className={styles.nav_list}>
          <ul>
            <li>
              <a href="#home" data-after="Home">
                בית
              </a>
            </li>
            <li>
              <a href="#catalog" data-after="Catalog">
                קטלוג
              </a>
            </li>
            <li>
              <a href="#projects" data-after="Projects">
                סדנאות
              </a>
            </li>
            <li>
              <a href="#about" data-after="About">
                קצת עלי
              </a>
            </li>
            <li>
              <a href="#contact" data-after="Contact">
                צרו קשר
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Header;