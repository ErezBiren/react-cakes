import styles from "./NavBar.module.css";
import NavLinks from "./NavLinks";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <NavLinks />
    </nav>
  );
};
export default Navigation;
