import { NavLink } from "react-router-dom";
import Apie5 from "../apie/Apie5";
import "./Porfolio1.css";
const Portfolio1 = () => {
  return (
    <>
      <div className="porfelis-intro">
        <h2>Mūsų Portfelis</h2>
      </div>
      <div className="portfelis-darbai">
        <div className="portfelis-darbai-left">
          <div className="portfelis-darbai-left1">
            <img src="/Foto1.png" alt="foto1" />
            <h3>Tinklalapių vartotojo sąsajos dizainas</h3>
            <p>Kūrybinis vartotojo sąsajos dizainas</p>
          </div>
          <div className="portfelis-darbai-left2">
            <img src="/Foto2.png" alt="foto2" />
            <h3>Vartotojo sąsajos dizainas</h3>
            <p>Kūrybinis logotipo atnaujinimas</p>
          </div>
          <div className="portfelis-darbai-left3">
            <img src="/Foto5.png" alt="foto5" />
            <h3>Grafinis dizainas</h3>
            <p>Grafinis dizainas</p>
          </div>
        </div>
        <div className="portfelis-darbai-right">
          <div className="portfelis-darbai-right1">
            <NavLink to="/vidinis">
              <img src="/Foto3.png" alt="foto3" />{" "}
            </NavLink>
            <h3>Kurti skaitmeninę strategiją</h3>
            <p>Socialinių tinklų Marketingas</p>
          </div>
          <div className="portfelis-darbai-right2">
            <img src="/Foto4.png" alt="foto4" />
            <h3>Reklaminių banerių kūrimas</h3>
            <p>Grafinis dizainas</p>
          </div>
          <div className="portfelis-darbai-right2">
            <img src="/Foto6.png" alt="foto6" />
            <h3>Vartotojo sąsajos dizainas</h3>
            <p>Kūrybinis logotipo atnaujinimas</p>
          </div>
        </div>
      </div>
      <Apie5 />
    </>
  );
};

export default Portfolio1;
