import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import { AccountCircle } from "@material-ui/icons";
import { PersonOutlineSharp } from "@material-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { cartActions } from "../../store/cart-Slice";
import { RootState } from "../../store/store";
import AuthForm from "../AuthForm";
import CartIcon from "../Cart/CartIcon";
import styles from "./Header.module.css";
import NavBar from "./NavBar";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
              <IconButton onClick={handleClick}>
                <PersonOutlineSharp />
              </IconButton>
              { <Link to="/auth" >כניסה</Link> }
            </div>
          )}
        </div>

        <div className={styles.navBar}>
          <NavBar />
        </div>
      </div>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
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
