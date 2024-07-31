import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import RootLayout from "./layouts/RootLayout";
import Pagrindinis from "./pagrindinis/Pagrindinis";
import Apie from "./apie/Apie";
import Kontaktai from "./kontaktai/Kontaktai";
import Portfolio from "./portfelis/Portfolio";
import Vidinis from "./projektoVidinis/Vidinis";

const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path = "/" element = {<RootLayout /> } >
      <Route index element={<Pagrindinis />} />
      <Route path="apie" element= {<Apie />} />
      <Route path="kontaktai" element= {<Kontaktai />} />
      <Route path="portfolio" element = {<Portfolio />} />
      <Route path="vidinis" element = {<Vidinis />} />


    </Route>
  )
)



function App() {
  return (
    <>
   <RouterProvider router = {router} />
    </>
  );
}

export default App;
