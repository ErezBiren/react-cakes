import { Link } from "react-router-dom";
import "./Header.css";
import { ReactComponent as LoginIcon } from "../assets/icons/login.svg";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function Header() {

  const isLoggedIn = useSelector((state : RootState) => state.auth.isLoggedIn);

  return (
    <section id="header">
      <div className="header">
        <div className="nav-bar">
          <div className="brand">
            <a href="#hero">{/* <h1>עדידי עוגות</h1> */}</a>
          </div>
          <div className="nav-list">
            <div className="hamburger">
              <div className="bar"></div>
            </div>
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
          </div>
          <Link to="/admin">
            {!isLoggedIn && <LoginIcon className="login_icon" />}
          </Link>
        </div>
      </div>
    </section>
  );
}
