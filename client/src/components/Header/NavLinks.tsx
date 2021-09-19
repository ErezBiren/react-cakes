const NavLinks = () => {
  return (
    <ul>
      <li>
        <a href="#home" data-after="Home">
          בית
        </a>
      </li>
      <li>
        <a href="#catalog" data-after="Catalog">
          קטלוג
        </a>
      </li>
      <li>
        <a href="#projects" data-after="Projects">
          סדנאות
        </a>
      </li>
      <li>
        <a href="#about" data-after="About">
          קצת עלי
        </a>
      </li>
      <li>
        <a href="#contact" data-after="Contact">
          צרו קשר
        </a>
      </li>
    </ul>
  );
};

export default NavLinks;
