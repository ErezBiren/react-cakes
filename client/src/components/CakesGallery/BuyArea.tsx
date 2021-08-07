import { cartActions } from "../../store/cart-Slice";
import { useDispatch } from "react-redux";
import { CakeData } from "../../store/cakes-Slice";
import styles from "./BuyArea.module.css"

const BuyArea: React.FC<{ cakeData: CakeData }> = ({cakeData}) => {

  const dispatch = useDispatch();


  const handleAddToCart = () => {
    dispatch(cartActions.addItemToCart(cakeData))
  };

  return (
    <div className={styles.buyArea_container}>
      <h3> {cakeData.price} ש"ח</h3>
      <button onClick={handleAddToCart}>הוספה לעגלה</button>
    </div>
  );
};

export default BuyArea;
