import Navigation from "./Navigation"
import MobileNavigation from "./MobileNavigation"
import styles from "./NavBar.module.css"

const NavBar =() => {
    return (
      <div className={styles.navBar}>
        <Navigation />
        <MobileNavigation/>
      </div>
    )
}

export default NavBar
    