import { NavLink } from "react-router-dom";
import "./Vidinis3.css";
const Vidinis3 = () => {
  return (
    <>
      <div className="vidinis-projektai">
        <h2>Naujausi Projekktai</h2>

        <div className="vidinis-naujausi">
          <div className="naujas-projektas1">
            <img src="/vidinis-naujas1.png" alt="1" />
            <h3
              class="truncated-text"
              title="Tinklalapių vartotojo sąsajos dizainas"
            >
              Tinklalapių vartotojo sąsaj...
            </h3>
            <p>Kūrybinis vartotojo sąsajos dizainas</p>
          </div>
          <div className="naujas-projektas2">
            <a href="#">
              {" "}
              <img src="/vidinis-naujas2.png" alt="2" />
            </a>
            <h3>Kurti skaitmeninę strategiją</h3>
            <p>Socialinių tinklų Marketingas</p>
          </div>
          <div className="naujas-projektas3">
            <img src="/vidinis-naujas3.png" alt="3" />
            <h3>Reklaminių banerių kūrimas</h3>
            <p>Grafinis dizainas</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vidinis3;
