import React from "react";
import { cartActions } from "../../store/cart-Slice";
import { useDispatch } from "react-redux";
import { CartItemData } from "../../store/cart-Slice";
import styles from "./CartProduct.module.css";
import { TextField } from "@material-ui/core";

const CartProduct: React.FC<{ cartItem: CartItemData }> = ({ cartItem }) => {
  const dispatch = useDispatch();

  const handleQuantityChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const quantity = parseInt(e.target.value);
    const updatedCart = { ...cartItem, quantity: quantity };
    dispatch(cartActions.updateCartItem(updatedCart));
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
            InputProps={{ inputProps: { min: 0, max: 10 } }}
            value={cartItem.quantity}
            onChange={handleQuantityChanged}
          />
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
