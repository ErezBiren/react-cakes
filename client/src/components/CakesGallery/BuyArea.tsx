import { useDispatch } from "react-redux";

import { CakeData } from "../../store/cakes-Slice";
import { cartActions } from "../../store/cart-Slice";
import styles from "./BuyArea.module.css";

const BuyArea: React.FC<{ cakeData: CakeData }> = ({ cakeData }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(cartActions.addItemToCart(cakeData));
    dispatch(cartActions.toggleCartDrawer(true));
  };

  return (
    <div className={styles.container}>
      <h3> {cakeData.price} ש"ח</h3>
      <button onClick={handleAddToCart}>הוספה לעגלה</button>
    </div>
  );
};

export default BuyArea;
