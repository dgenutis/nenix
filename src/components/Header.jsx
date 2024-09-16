import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="headeris">
        <header>
          <div className="logo1">
            <img src="/logo1.svg" alt="logo" />
          </div>
          <nav>
            <div className="burger" onClick={toggleMenu}>
              &#9776;
            </div>
            <ul className={isMenuOpen ? "nav-links open" : "nav-links"}>
              <li>
                <NavLink to="/" className="header-pradzia">
                  Pradžia
                </NavLink>
              </li>
              <li>
                <NavLink to="/apie">Apie Mus</NavLink>
              </li>
              <li>
                <NavLink to="/portfolio">Portfelis</NavLink>
              </li>
              <li>
                <NavLink className="kont" to="/kontaktai">
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
