import "./Pagrindinis3.css"
const Pagrindinis3 = () => {
  return (
    <>
      <div className="misija">
        <div className="misija-left">
          <img src="/cascade1.jpg" alt="1" className="img1" />
          <img src="/cascade2.jpg" alt="2" className="img2" />
          <img src="/cascade3.jpg" alt="3" className="img3" />
        </div>
        <div className="misija-right">
          <h3>Apie mus</h3>
          <h2>Pagrindinė misija slypinti už visų mūsų darbų</h2>
          <p>
            Sukurti technologijų sprendimus, kurie transformuoja ir praturtina
            verslo veiklą..
          </p>
          <div className="statistika">
            <div className="statistika1">
              <h3>330 +</h3>
              <p>Verslams padėta</p>
            </div>
            <div className="statistika2">
              <h3>230 +</h3>
              <p>Sugeneruota pajamų</p>
            </div>
          </div>
          <button>
            {" "}
            <img src="/rodykle.svg" alt="" />
            Išbandykite nemokamai
          </button>
        </div>
      </div>
    </>
  );
};

export default Pagrindinis3;
