import "./Kontaktai1.css";
const Kontaktai1 = () => {
  return (
    <>
      <div className="kontaktai">
        <div className="kontaktai-left">
          <h3>Pasikalbėkime</h3>
          <p>
            Mes bendradarbiaujame su tūkstančiais kūrėjų, verslininkų ir
            tikromis legendomis.
          </p>
          <hr />
          <div className="kontaktu-blokas">
            <div className="kontaktai-left1">
              <a href="#">
                <img src="/kontaktai1.svg" alt="kontaktai1" />
              </a>
              <a href="#">
                <img src="/kontaktai2.svg" alt="kontaktai2" />
              </a>
              <a href="#">
                <img src="/kontaktai3.svg" alt="kontaktai3" />
              </a>
            </div>

            <div className="kontaktai-left2">
              <h4>Mūsų el. paštas</h4>
              <p>
                <a href="mailto:">hello@example.com</a>
              </p>
              <h4>Skambinkite mums</h4>
              <p>
                <a href="tel:">+123 456 7892</a>
              </p>
              <h4>Raskite mus</h4>
              <p>
                <a href="https://www.google.lt">Open Google Maps</a>
              </p>
            </div>
          </div>
          <hr />
          <div className="miniIcons">
            <img src="/miniIcon1.svg" alt="mini1" />
            <img src="/miniIcon2.svg" alt="mini2" />
            <img src="/miniIcon3.svg" alt="mini3" />
          </div>
        </div>
        <div className="kontaktai-right">
          <form>
            <div className="duomenys">
              <div className="forma1">
                <p>Vardas</p>
                <input type="text" required />
                <p>El. paštas</p>
                <input type="text" required />
              </div>
              <div className="forma2">
                <p>Pavardė</p>
                <input type="text" required />
                <p>Telefono Nr.</p>
                <input type="text" required />
              </div>
            </div>
            <p>Žinutė</p>
            <textarea />
            <button type="submit">Siųsti</button>
          </form>
        </div>
      </div>
      <div className="zemelapis">
        <a href="#">
          <img src="/Map.png" alt="map" />
        </a>
      </div>
    </>
  );
};

export default Kontaktai1;
