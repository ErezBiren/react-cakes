import { useSelector } from "react-redux";
import {ReactComponent as Icon} from "../../assets/icons/cart.svg"
import { RootState } from "../../store/store";
import styles from "./CartIcon.module.css"


function CartIcon() {

    const totalQuantity = useSelector((state : RootState) => state.cart.totalQuantity);

    return (
        <div className={styles.container}>
            <Icon className={styles.cartIcon}/>  
            <div className={styles.totalQuantity}>{totalQuantity}</div>
        </div>
    )
}

export default CartIcon
