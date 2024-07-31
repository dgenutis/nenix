import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Header2 from "../components/Header2";

export default  function RootLayout(){
 const location = useLocation();
 const isHomePage = location.pathname === "/";

    return (
      <div className="root-layout">
        {isHomePage ? <Header /> : <Header2 />}
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    );
}