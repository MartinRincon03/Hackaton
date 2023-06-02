import { useState, useRef } from "react";
import Title from "../atoms/Title";
import WrapperInput from "../molecules/WrapperInput";
import "../../assets/styles/formReporter.css";

function FormReporte() {
  const form = useRef();

  let endpoint = "http://localhost:3001/formularios/"

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
        <button type="submit" className="btn-crear">
          Enviar reporte
        </button>
      </form>
    </div>
  );
}

export default FormReporte;
