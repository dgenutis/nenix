import "./Apie4.css";
const Apie4 = () => {
  return (
    <>
      <div className="musuKomanda">
        <h2>Mūsų komanda</h2>
        <div className="musuNariai">
          <div className="narys1">
            <img src="/komanda1.png" alt="komanda1" />
            <div className="ikoneles">
              <a>
                <img src="/fb.svg" alt="fb" />
              </a>
              <a>
                <img src="/insta.svg" alt="insta" />
              </a>
              <a>
                <img src="/linkedin.svg" alt="linkedin" />
              </a>
            </div>
            <h3>Eglė Petrauskaitė</h3>
            <p>Įkūrėja ir generalinė direktorė</p>
          </div>
          <div className="narys2">
            <img src="/komanda2.png" alt="komanda2" />
            <div className="ikoneles">
              <a>
                <img src="/fb.svg" alt="fb" />
              </a>
              <a>
                <img src="/insta.svg" alt="insta" />
              </a>
              <a>
                <img src="/linkedin.svg" alt="linkedin" />
              </a>
            </div>
            <h3>Mantas Vaitkus</h3>
            <p>Rinkodaros vadovas</p>
          </div>
          <div className="narys3">
            <img src="/komanda3.png" alt="komanda3" />
            <div className="ikoneles">
              <a>
                <img src="/fb.svg" alt="fb" />
              </a>
              <a>
                <img src="/insta.svg" alt="insta" />
              </a>
              <a>
                <img src="/linkedin.svg" alt="linkedin" />
              </a>
            </div>
            <h3>Aušra Kazlauskienė</h3>
            <p>Rinkodaros vadovė</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Apie4;
