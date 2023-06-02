import "../assets/styles/Nosotros.css";
import Title from "../components/atoms/Title";

function Nosotros() {
  return (
    <div className="sobre-nosotros">
      <div className="cover-3">
        <Title msn={"Conoce sobre nosotros"} />
        {/* <p className="lead text-white ">
          <b>
            
          </b>
        </p> */}
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette custom-row">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">
            <span className="text-body-secondary">Objetivo</span>
          </h2>
          <p className="lead">
            <li>
                <ul>La importancia de contar con una solución de vanguardia y al alcance de cualquier persona,  que permita monitorear el recorrido del caudal de ríos y arroyos.</ul>
                <ul>Mecanismo de denuncia que permita hacer valer los derechos humanos de la salud y del acceso al agua</ul>
            </li>
          </p>
        </div>
        <div className="col-md-5">
          <svg
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="var(--bs-secondary-bg)" />
            <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">
              500x500
            </text>
          </svg>
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette custom-row">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading fw-normal lh-1">
            <span className="text-body-secondary">Misión</span>
          </h2>
          <p className="lead">
            Another featurette? Of course. More placeholder content here to give
            you an idea of how this layout would work with some actual
            real-world content in place.
          </p>
        </div>
        <div className="col-md-5 order-md-1">
          <svg
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="var(--bs-secondary-bg)" />
            <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">
              500x500
            </text>
          </svg>
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette custom-row">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">
            <span className="text-body-secondary">Visión</span>
          </h2>
          <p className="lead">
            And yes, this is the last block of representative placeholder
            content. Again, not really intended to be actually read, simply here
            to give you a better view of what this would look like with some
            actual content. Your content.
          </p>
        </div>
        <div className="col-md-5">
          <svg
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="var(--bs-secondary-bg)" />
            <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">
              500x500
            </text>
          </svg>
        </div>
      </div>

      <hr className="featurette-divider" />
    </div>
  );
}

export default Nosotros;
