import React from "react";

const NavLinks: React.FC<{
  closeMobileMenu?: React.MouseEventHandler<HTMLLIElement>;
}> = ({ closeMobileMenu }) => {
  return (
    <ul>
      <li onClick={closeMobileMenu}>
        <a href="#home" data-after="Home">
          בית
        </a>
      </li>
      <li onClick={closeMobileMenu}>
        <a href="#catalog" data-after="Catalog">
          קטלוג
        </a>
      </li>
      <li onClick={closeMobileMenu}>
        <a href="#projects" data-after="Projects">
          סדנאות
        </a>
      </li>
      <li onClick={closeMobileMenu}>
        <a href="#about" data-after="About">
          קצת עלי
        </a>
      </li>
      <li onClick={closeMobileMenu}>
        <a href="#contact" data-after="Contact">
          צרו קשר
        </a>
      </li>
    </ul>
  );
};

export default NavLinks;
