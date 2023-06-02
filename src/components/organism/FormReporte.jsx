import Title from "../atoms/Title";
import WrapperInput from "../molecules/WrapperInput";
import "../../assets/styles/formReporter.css";

function FormReporte() {
  const handlerClick = () => {
    e.preventDefault();
    console.log("Envio los datos");
  };

  return (
    <div className="form_register">
      <Title
        msn={"Crear Reporte"}
      />
      <form>
        <WrapperInput
          msn="Titulo para tu reporte"
          type="text"
          placeholder="P.j. Incendio en el cerro Mactumatzá"
          name={"titulo"}
        />
        <WrapperInput
          msn="Descripcion"
          type="text"
          placeholder="Añade una breve descripcion del suceso"
          name={"descripcion"}
        />
        <WrapperInput
          msn="Ubicacion"
          type="text"
          placeholder="lat, long"
          name={"ubicacion"}
        />
        <WrapperInput msn="Fecha" type="date" placeholder="" name={"fecha"} />
        <div class="custom-input_date">
          <input type="file" id="image-input" accept="image/*" />
          <label for="image-input">Seleccionar imagen</label>
        </div>

        <button type="button" handlerClick={handlerClick} className="btn-crear">
          Enviar reporte
        </button>
      </form>
    </div>
  );
}

export default FormReporte;
