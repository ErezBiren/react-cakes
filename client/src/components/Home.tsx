import { ReactComponent as CakeIcon } from "../assets/icons/cake.svg";
import mainCakeSrc from "../assets/mainCake.jpeg";
import styles from "./Home.module.css";

export default function HomePage() {
  return (
    <section id="home">
      <div className={`${styles.homeContainer} container`}>
        <div className={styles.mainCakeContainer}>
          <img className={styles.mainCake} src={mainCakeSrc} />
        </div>

        <div className={styles.titleContainer}>
          <div className={styles.titleInnerContainer}>
            <h1>העוגות של דידי</h1>
            {<CakeIcon className={styles.cakeIcon} />}
          </div>
          <p>שיגעון של עוגות ומתוקים לכל אירוע בעיצוב אישי</p>
        </div>
      </div>
    </section>
  );
}
