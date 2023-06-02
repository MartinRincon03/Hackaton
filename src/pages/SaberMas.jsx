import "../assets/styles/SaberMas.css";
import Title from "../components/atoms/Title";

function SaberMas() {
  return (
    <div>
      <div className="cover-second">
        <Title msn={"¡Conoce más sobre cómo puedes cuidar tu localidad!"} />
        <p className="lead text-white ">
          <b>Al cuidar tu localidad, construyes un entorno más seguro, limpio y
          vibrante para ti y para los demás.</b>
        </p>
      </div>
      <div className="hero text-dark text-center py-5">
        <h3 className="display-4 text-dark">
            ¡Descubre cómo puedes cuidar tu localidad y proteger tu entorno!
        </h3>
        <p className="lead">
            ¡Cuida tu localidad y protege el medio ambiente! Ahorra agua, combate la deforestación y reflexiona sobre tu responsabilidad individual. Cada acción cuenta: separa la basura, reduce el plástico y promueve la educación ambiental. ¡Únete y haz la diferencia hoy mismo!
        </p>
      </div>

      <div className="container mt-5">
        <h2 className="subtitle">Sobre el agua</h2>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card">
              <img
                src="https://revista.une.org/images/revistas/articulos/41551a6e4d77e372ad6241d528794650.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  La disponibilidad de agua, su gestión sostenible y el
                  saneamiento para todos.
                </h5>
                <a
                  href="https://www.agenda2030.chiapas.gob.mx/objetivo-6-agua-limpia-y-saneamiento/"
                  className="styled-link"
                >
                  Ver más
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://images.unsplash.com/photo-1530587191325-3db32d826c18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  Contaminación de ríos y arroyos es cada vez más preocupante.
                </h5>
                <a
                  href="https://agua.org.mx/chiapas-contaminacion-de-rios-y-arroyos-es-cada-vez-mas-preocupante-ultimatum/"
                  className="styled-link"
                >
                  Ver más
                </a>
              </div>
            </div>
          </div>
        </div>
        <br></br><br></br>
        <h2 className="subtitle mt-5">Deforestación</h2>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card">
              <img
                src="https://rde.inegi.org.mx/wp-content/uploads/2021/04/RDE33_art02_img03.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  Comparación de métodos de detección de cambio forestal.
                </h5>
                <a
                  href="https://rde.inegi.org.mx/wp-content/uploads/2021/04/RDE33_02.pdf"
                  className="styled-link"
                >
                  Ver más
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://www.scielo.org.mx/img/revistas/mb/v24nspe//2448-7597-mb-24-spe-e2401897-gf2.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  Diagnóstico sobre determinantes de deforestación en Chiapas.
                </h5>
                <a
                  href="http://sis.cnf.gob.mx/wp-content/plugins/conafor-files/2018/nacional/catalogo/biblioteca/101.pdf"
                  className="styled-link"
                >
                  Ver más
                </a>
              </div>
            </div>
          </div>
        </div>

        <br></br><br></br>
        <h2 className="subtitle mt-4">Deterioro ambiental</h2>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card">
              <img
                src="https://i0.wp.com/agronoticias.com.mx/wp-content/uploads/2017/06/informaparaguaypuntocom.jpg?resize=600%2C280&ssl=1"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  ESTADÍSTICAS A PROPÓSITO DEL DÍA MUNDIAL DEL MEDIO AMBIENTE.
                </h5>
                <a
                  href="https://www.inegi.org.mx/contenidos/saladeprensa/aproposito/2020/ambiente2020_Nal.pdf"
                  className="styled-link"
                >
                  Ver más
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://www.nueva-iso-14001.com/wp-content/uploads/2020/12/medio-ambiente.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Población y medio ambiente.</h5>
                <a
                  href="https://apps1.semarnat.gob.mx:8443/dgeia/informe18/tema/cap1.html"
                  className="styled-link"
                >
                  Ver más
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </div>
  );
}

export default SaberMas;
