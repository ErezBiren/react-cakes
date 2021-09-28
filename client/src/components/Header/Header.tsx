import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import Menu from "@material-ui/core/Menu";
import { PersonOutlineSharp } from "@material-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { cartActions } from "../../store/cart-Slice";
import { RootState } from "../../store/store";
import AuthForm from "../Auth/AuthForm";
import CartIcon from "../Cart/CartIcon";
import styles from "./Header.module.css";
import NavBar from "./NavBar";

const Header = () => {
  const [menuAnchorEl, setMenuAnchorEl] = React.useState<null | HTMLElement>(
    null
  );
  const open = Boolean(menuAnchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMenuAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setMenuAnchorEl(null);
  };

  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  const isDrawerOpen = useSelector(
    (state: RootState) => state.cart.isDrawerOpen
  );
  const dispatch = useDispatch();

  const handleCartIconClick = () => {
    dispatch(cartActions.toggleCartDrawer(!isDrawerOpen));
  };

  return (
    <section className={styles.headerContainer}>
      <div className={styles.header}>
        <div className={styles.other}>
          <div className={styles.cartIcon}>
            <IconButton onClick={handleCartIconClick}>
              <CartIcon />
            </IconButton>
          </div>

          {!isLoggedIn && (
            <div className={styles.login}>
              <IconButton onClick={handleClick}>
                <PersonOutlineSharp />
              </IconButton>
              {
                <Link href="#" onClick={() => handleClick}>
                  כניסה
                </Link>
              }
            </div>
          )}
        </div>

        <div className={styles.navBar}>
          <NavBar />
        </div>
      </div>

      <Menu
        id="basic-menu"
        anchorEl={menuAnchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <AuthForm handleClose={handleClose} />
      </Menu>
    </section>
  );
};

export default Header;
