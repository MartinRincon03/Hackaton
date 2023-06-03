import { useRef } from "react";
import Title from "../atoms/Title";
import WrapperInput from "../molecules/WrapperInput";
import "../../assets/styles/formReporter.css";

function FormReporte() {
  const form = useRef();

  let endpoint = "http://localhost:3001/formularios/"

  const handlerClick = (e) => {
    e.preventDefault();
    const newForm = new FormData(form.current);

      let options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          titulo: newForm.get("titulo"),
          descripcion: newForm.get("descripcion"),
          ubicacion: newForm.get("ubicacion"),
          fecha: newForm.get("fecha")
        }),
      };
    
    fetch(endpoint, options)
      .then((response) => response.json())
      .then((data) => {
        alert("Usuario registrado exitosamente!");
      });
  };

  return (
    <div className="form_register">
      <Title msn={"Crear Reporte"} />
      <form ref={form}>
        <WrapperInput
          msn="Titulo para tu reporte"
          type="text"
          placeholder="P.j. Incendio en el cerro Mactumatzá"
          name="titulo"
        />
        <WrapperInput
          msn="Descripcion"
          type="text"
          placeholder="Añade una breve descripcion del suceso"
          name="descripcion"
        />
        <WrapperInput
          msn="Ubicacion"
          type="text"
          placeholder="lat, long"
          name="ubicacion"
        />
        <WrapperInput
          msn="Fecha"
          type="date"
          placeholder=""
          name="fecha"
        />
        <button type="button" className="btn-crear" onClick={handlerClick}>
          Enviar reporte
        </button>
      </form>
    </div>
  );
}

export default FormReporte;
