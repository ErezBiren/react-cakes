import { IconButton, TextField, Tooltip } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import CloseIcon from "@material-ui/icons/Close";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { cartActions } from "../../store/cart-Slice";
import { CartItemData } from "../../store/cart-Slice";
import styles from "./CartProduct.module.css";

const CartProduct: React.FC<{ cartItem: CartItemData }> = ({ cartItem }) => {
  const [isCloseButtobVisible, setIsCloseButtobVisible] = useState(false);
  const dispatch = useDispatch();

  const handleQuantityChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const quantity = parseInt(e.target.value);
    const updatedCart = { ...cartItem, quantity: quantity };
    dispatch(cartActions.updateCartItem(updatedCart));
  };

  const handleRemoveItem = () => {
    dispatch(cartActions.removeCartItem(cartItem));
  };

  const handleMouseEnter = () => {
    setIsCloseButtobVisible(true);
  };

  const handleMouseLeave = () => {
    setIsCloseButtobVisible(false);
  };

  return (
    <div
      className={styles.main}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.imageContainer}>
        <img className={styles.image} src={cartItem.cakeData.imageSource} />
      </div>
      <div className={styles.detailes}>
        <div>{cartItem.cakeData.name}</div>
        <div>{cartItem.cakeData.price} ש"ח</div>
        <div>
          <TextField
            type="number"
            name="quantity"
            InputProps={{ inputProps: { min: 1, max: 10 } }}
            value={cartItem.quantity}
            onChange={handleQuantityChanged}
          />
        </div>
      </div>
      <Tooltip title="הסר פריט">
        <IconButton onClick={handleRemoveItem}>
          <CloseIcon
            style={{ color: isCloseButtobVisible ? "gray" : "transparent" }}
          />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default CartProduct;
