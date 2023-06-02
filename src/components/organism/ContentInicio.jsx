import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Title from "../atoms/Title";
import CardReport from "../molecules/CardReport";
import ViewMap from "../atoms/ViewMap";
import IconSearch from "../../assets/img/Search.svg";
import "../../assets/styles/inicio.css";

function ContentInicio({ dataReports }) {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = event => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    const results = dataReports.filter(objeto =>
      objeto.titulo.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  // Inicializa el estado searchResults con el arreglo completo de datos
  useState(() => {
    setSearchResults(dataReports);
  }, []);

  const redireccinarCrearReporte = () => {
    navigate("/crearreporte");
  };

  return (
    <div className="container-inicio">
      <div className="cover-inicio">
        <Title msn={"Cuidemos Chiapas, cuidemos nuestra agua"} />
        <button className="btn-create" onClick={redireccinarCrearReporte}>
          Crear reporte ciudadano
        </button>
      </div>

      <div className="input-group">
        <input
          className="form-control input-css"
          type="search"
          placeholder="Buscar Reporte"
          value={searchTerm}
          onChange={handleSearch}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary btn-css" type="button">
            <img src={IconSearch} />
          </button>
        </div>
      </div>
      
      <div className="flex_container-cards">
        {searchResults.map((report) => (
          <CardReport
            key={report.id}
            img={report.imagen}
            titulo={report.titulo}
            descripcion={report.descripcion}
            ubicacion={report.ubicacion}
            fecha={report.fecha}
          />
        ))}
      </div>

      <div className="maps-container">
        <ViewMap />
      </div>
    </div>
  );
}

export default ContentInicio;
