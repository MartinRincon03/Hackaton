import "../../assets/styles/inicio.css";
import Title from "../atoms/Title";
import CardReport from "../molecules/CardReport";

function ContentInicio({ dataReports }) {
  return (
    <div className="container-inicio">
      <div className="cover-inicio">
        <Title msn={"Cuidemos Chiapas, cuidemos nuestra agua"} />
        <button className="btn-create">Crear reporte ciudadano</button>
      </div>

      <div className="flex_container-cards">
        { dataReports.map((report) => (
          <CardReport
            key={report.id}
            img={report.imagen}
            titulo={report.titulo}
            descripcion={report.descripcion}
            ubicacion={report.ubicacion}
            fecha={report.fecha}
          />
        )) }
      </div>
    </div>
  );
}

export default ContentInicio;
