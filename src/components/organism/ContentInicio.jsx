import '../../assets/styles/inicio.css'
import Title from '../atoms/Title';

function ContentInicio() {
  return (
    <div className="cover-inicio">
      <Title msn={"Cuidemos Chiapas, cuidemos nuestra agua"}/>
      <button className='btn-create'>Crear reporte ciudadano</button>
      {/* <button className="btn-crear_reporte" onClick={redireccionarPublicar}>
        Comenzar a vender
      </button> */}
    </div>
  );
}

export default ContentInicio;
