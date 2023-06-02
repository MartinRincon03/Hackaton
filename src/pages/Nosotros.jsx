import Title from "../components/atoms/Title";
import ImgVision from '../assets/img/imgVision.webp' 
import ImgMision from '../assets/img/imgMision.webp'
import ImgObjetivos from '../assets/img/imgObjetivos.webp'
import "../assets/styles/Nosotros.css";

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
            <span className="text-body-secondary caption-nosotros">Objetivos</span>
          </h2>
          <p className="lead">
            <ul>
              <li className="item-objetivo">
                Contar con una solución de vanguardia y al alcance de cualquier
                persona, que permita monitorear situaciones que afecten a nuesto
                estado y planeta
              </li>
              <li className="item-objetivo">
                Ser un mecanismo de denuncia que permita hacer valer los
                derechos humanos de la salud y del acceso al agua
              </li>
              <li className="item-objetivo">
                Mejorar la calidad de vida de los ciudadanos de Chiapas
              </li>
            </ul>
          </p>
        </div>
        <img className="imgNosotros" src={ImgObjetivos} alt="" />
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette custom-row">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading fw-normal lh-1">
            <span className="text-body-secondary caption-nosotros">Misión</span>
          </h2>
          <p className="lead">
            Nuestra misión es contribuir al cuidado y preservación del medio
            ambiente en el estado de Chiapas, mediante el desarrollo de un
            software innovador que promueva la conciencia ambiental, facilite la
            identificación de problemáticas ambientales y fomente la
            participación ciudadana en la búsqueda de soluciones. Buscamos
            generar un impacto positivo en la conservación de los recursos
            naturales, la reducción de la deforestación y el fomento de
            prácticas sostenibles en el estado.
          </p>
        </div>
        <img className="imgNosotros" src={ImgVision} alt="" />
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette custom-row">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">
            <span className="text-body-secondary caption-nosotros">Visión</span>
          </h2>
          <p className="lead">
            Nuestra visión es convertirnos en una herramienta de referencia para
            el cuidado del medio ambiente en Chiapas, siendo reconocidos por
            nuestra contribución significativa en la concienciación y acción
            ambiental. Aspiramos a ser una plataforma que integre información
            confiable, recursos educativos y herramientas interactivas para
            empoderar a los ciudadanos, instituciones gubernamentales y
            organizaciones ambientales en la protección y restauración del
            entorno natural en Chiapas. Buscamos generar un cambio positivo y
            duradero en la relación entre las personas y el medio ambiente,
            promoviendo la sostenibilidad y la calidad de vida en la región.
          </p>
        </div>
        <img className="imgNosotros" src={ImgMision} alt="" />
      </div>

      <hr className="featurette-divider" />
    </div>
  );
}

export default Nosotros;
