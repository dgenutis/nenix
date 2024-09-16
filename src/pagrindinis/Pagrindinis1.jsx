import "./Pagrindinis1.css"
const Pagrindinis1 = () => {
  return (
    <>
      <div className="pagrindinis">
        <div className="pagrindinis1">
          <img src="/Ornament.png" alt="ornament" />
        </div>
        <div className="pagrindinis2">
          <div className="pagrindinis2-1">
            <h2>Pasiruošę pakelti</h2>
            <h2 className="keiciamSpalva">savo verslo augimą</h2>
            <h2>į kitą lygį?</h2>
            <p>
              Išbandykite nemokamą bandomąją versiją ir keliaukite į naują
              verslo lygį kartu su mumis!
            </p>
            <button> <img src="/rodykle.svg" alt="" />Išbandykite nemokamai</button>
          </div>
          <div className="pagrindinis2-2">
            <h2>Mumis pasitiki pirmaujantys prekės ženklai</h2>
            <div className="logotipai">
                <img className="logotipai1" src="/logos1.png" alt="logos1" />
                <img className="logotipai2" src="/logos2.png" alt="logos2" />
                <img className="logotipai3" src="/logos3.png" alt="logos3" />
                <img className="logotipai4" src="/logos4.png" alt="logos4" />
            </div>
          </div>
        </div>
        <div className="pagrindinis3">
            <img src="/paveiksliukas.png" alt="paveiksliukas" />
        </div>
      </div>
    </>
  );
};

export default Pagrindinis1;
