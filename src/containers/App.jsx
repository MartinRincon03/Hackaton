import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Navbar from "../components/molecules/Navbar";
import Inicio from "../pages/Inicio";
import SaberMas from "../pages/SaberMas";
import Nosotros from "../pages/Nosotros";
import Footer from "../components/molecules/Footer";
import CrearReporte from "../pages/CrearReporte";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className="container-pages">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/sabermas" element={<SaberMas />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/crearreporte" element={<CrearReporte />} />

            {/* <Route path="/*" element={<NotFound />} /> */}
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
