import { CartItemData } from "../../store/cart-Slice";
import styles from "./CartProduct.module.css"

const CartProduct: React.FC<{ cartItem: CartItemData }> = ({ cartItem }) => {
  return (
    <tr className={styles.items_in_cart}>
      <td>
        <img src={cartItem.cakeData.imageSource}></img>
      </td>
      <td>{cartItem.cakeData.name}</td>
      <td>{cartItem.cakeData.price}</td>
      <td>
        <input type="number" name="quantity" min="1" max="10" />
      </td>
      <td>{cartItem.cakeData.price * cartItem.quantity}</td>
      <td>
        <i className="fas fa-trash"></i>
      </td>
    </tr>
  );
};


export default CartProduct;
