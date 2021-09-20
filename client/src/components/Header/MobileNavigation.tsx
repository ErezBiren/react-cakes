import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";

import styles from "./NavBar.module.css";
import NavLinks from "./NavLinks";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const toggleIcon = () => {
    setOpen(!open);
  };

  const closeIcon = (
    <div onClick={toggleIcon}>
      <CloseIcon className={styles.hamburger} />
    </div>
  );

  const menuIcon = (
    <div onClick={toggleIcon}>
      <MenuIcon className={styles.hamburger} />
    </div>
  );

  const closeMobileMenu = () => setOpen(false);

  return (
    <nav className={styles.mobileNavigation}>
      {open ? closeIcon : menuIcon}
      {open && <NavLinks closeMobileMenu={closeMobileMenu} />}
    </nav>
  );
};

export default MobileNavigation;
