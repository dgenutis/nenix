import { NavLink } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer1">
          <div className="footer1-1">
            <img src="/Logo1.svg" alt="" />
            <p>
              Mes esame strategų ir skaitmeninių inovatorių komanda, suvienyta
              siekiant meistriškumo ir pilnatvės.
            </p>
          </div>
          <div className="footer1-2">
            <h3>Puslapiai</h3>
            <ul>
              <li>
                <NavLink to="/">Pagrindinis</NavLink>
              </li>
              <li>
                <NavLink to="/apie">Apie Mus</NavLink>
              </li>
              <li>
                <NavLink to="/kontaktai">Kontaktai</NavLink>
              </li>

              <li>
                <NavLink to="/portfolio">Portfolio</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer1-3">
            <h3>Straipsniai</h3>
            <a href="#">Stiliaus gidas kas tai?</a>
            <a href="#">Kokie pulapiai yra būtini jūsų svetainei?</a>
            <a href="#">Licencijos: Kas Jos Reikšmė ir Kodėl Tai Svarbu</a>
            <a href="#">Kaip Sekti Naujoves ir Pakeitimus?</a>
            <a href="#">Klaidos puslapis 404, kam jis reikalingas? </a>
            <a href="#">Kaip susikurti saugų slaptažodį? </a>
          </div>
          <div className="footer1-4">
            <h3>Prenumeruokite naujienas</h3>

            <div className="footer1-4-1">
              <div className="input-container">
                <input type="text" placeholder="Įveskite savo el. paštą čia" />
                <button>Prenumeruoti</button>
              </div>
            </div>
          </div>
        </div>
        <div className="juosta">
          <hr />
        </div>
        <div className="footer2">
          <div className="footer2-1">
            <h3>Autoriaus teisės priklauso</h3>
            <p>Dizainas: VCS+IV</p>
          </div>
          <div className="footer2-2">
            <h3>Susisiekite</h3>
            <a href="tel:+370 123 45 745">+370 123 45 745</a>
          </div>
          <div className="footer2-3">
            <h3>Adresas</h3>
            <p>Vytauto gatvė 10A, Kaunas</p>
          </div>
          <div className="footer2-4">
            <a>
              <img src="../../public/fb.svg" alt="fb" />
            </a>
            <a>
              <img src="../../public/insta.svg" alt="insta" />
            </a>
            <a>
              <img src="../../public/linkedin.svg" alt="linkedin" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
