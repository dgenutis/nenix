import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Header2.css";

export default function Header2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="headeris2">
        <header className="header2">
          <div className="logo2">
            <img src="../../public/logoTamsus.svg" alt="logo" />
          </div>
          <nav className="nav2">
            <div className="burger2" onClick={toggleMenu}>
              &#9776;
            </div>
            <ul className={isMenuOpen ? "nav-links2 open" : "nav-links2"}>
              <li>
                <NavLink to="/">Pradžia</NavLink>
              </li>
              <li>
                <NavLink to="/apie">Apie Mus</NavLink>
              </li>
              <li>
                <NavLink to="/portfolio">Portfelis</NavLink>
              </li>
              <li>
                <NavLink className="kont2" to="/kontaktai">
                  Kontaktai
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
}
