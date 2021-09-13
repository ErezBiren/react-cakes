import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import CartProduct from "./CartProduct";

const CartList = ()=> {

  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  return (
    <div>
      {cartItems.map((item, index) => (
        <CartProduct cartItem={item} />
      ))}
    </div>
  );
}

export default CartList;
