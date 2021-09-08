import React from "react";
import { cartActions } from "../../store/cart-Slice";
import { useDispatch } from "react-redux";
import { CartItemData } from "../../store/cart-Slice";
import styles from "./CartProduct.module.css";
import { IconButton, TextField, Tooltip } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const CartProduct: React.FC<{ cartItem: CartItemData }> = ({ cartItem }) => {
  const dispatch = useDispatch();

  const handleQuantityChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const quantity = parseInt(e.target.value);
    const updatedCart = { ...cartItem, quantity: quantity };
    dispatch(cartActions.updateCartItem(updatedCart));
  };

  const handleRemoveItem = () => {
    dispatch(cartActions.removeCartItem(cartItem));
  };

  return (
    <div className={styles.main}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={cartItem.cakeData.imageSource}></img>
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
          <CloseIcon />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default CartProduct;
