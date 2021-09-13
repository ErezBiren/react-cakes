import styles from "./Home.module.css";
import mainCakeSrc from "../assets/mainCake.jpeg";

import { ReactComponent as CakeIcon } from "../assets/icons/cake.svg";

import CakeForm from "./CakeForm";
import { authActions } from "../store/auth-Slice";
import { useSelector, useDispatch } from "react-redux";
import { cakesActions } from "../store/cakes-Slice";
import { RootState } from "../store/store";

export default function HomePage() {
  const dispatch = useDispatch();

  const isAdmin = useSelector((state: RootState) => state.auth.isAdmin);

  return (
    <section id="home">
      <div className={`${styles.home_container} container`}>
        {/* <button onClick={() => dispatch(authActions.toggleAdmin())}>
          is Admin
        </button>
        {isAdmin && <CakeForm />} */}

        <div className={styles.title_container}>
          <div className={styles.title_inner_container}>
            <h1>העוגות של דידי</h1>
            {<CakeIcon className={styles.cake_icon} />}
          </div>
          <p>שיגעון של עוגות ומתוקים לכל אירוע בעיצוב אישי</p>
        </div>

        <div className={styles.main_cake_container}>
          {/* <div class="home_main_cake_fade_effect"></div> */}
          <img className={styles.main_cake} src={mainCakeSrc}/>
        </div>
      </div>
    </section>
  );
}
