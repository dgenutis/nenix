import { NavLink } from 'react-router-dom';
import './Pagrindinis4.css'

const Pagrindinis4 = () => {
  return (
    <>
      <div className="procesas">
        <h3>Procesas</h3>
        <h2>Procesas, kuris skatina pažangą</h2>
        <img src="/Procesas.svg" alt="procesas" />
      </div>
      <div className="naujausiDarbai">
        <h2>Naujausi darbai</h2>
        <div className="darbai">
          <div className="darbai-left">
            <div className="darbai-left1">
              <img src="/Foto1.png" alt="foto1" />
              <h3>Tinklalapių vartotojo sąsajos dizainas</h3>
              <p>Kūrybinis vartotojo sąsajos dizainas</p>
            </div>
            <div className="darbai-left2">
              <img src="/Foto2.png" alt="foto2" />
              <h3>Vartotojo sąsajos dizainas</h3>
              <p>Kūrybinis logotipo atnaujinimas</p>
            </div>
          </div>
          <div className="darbai-right">
            <button>
              {" "}
              <img src="/rodykleBalta.svg" alt="" />
              Išbandykite nemokamai
            </button>
            <div className="darbai-right1">
              <NavLink to="/vidinis">
                {" "}
                <img src="/Foto3.png" alt="foto3" />
              </NavLink>

              <h3>Kurti skaitmeninę strategiją</h3>
              <p>Socialinių tinklų Marketingas</p>
            </div>
            <div className="darbai-right2">
              <img src="/Foto4.png" alt="foto4" />
              <h3>Reklaminių banerių kūrimas</h3>
              <p>Grafinis dizainas</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagrindinis4;
