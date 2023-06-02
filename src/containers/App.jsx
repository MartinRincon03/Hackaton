import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Navbar from "../components/atoms/Navbar";
import Inicio from "../pages/Inicio";
import SaberMas from "../pages/SaberMas";
import Nosotros from "../pages/Nosotros";

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

            {/* <Route path="/*" element={<NotFound />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
