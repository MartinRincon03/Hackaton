import '../../assets/styles/inicio.css'

function CardReport({ img, titulo, descripcion, ubicacion, fecha }) {
    return ( 
        <div className="report-card">
            <figure className='container-img_report'>
                <img src={img} alt="Imagen del incidente" />
            </figure>
            <div className="contenido">
                <h3>{titulo}</h3>
                
                <div className="info-contenido" >
                    <p className='info-descripcion'>{descripcion}</p>
                    <div className='info-bottom'>
                        <span className='info-ubicacion'>{ubicacion}</span>
                        <span className='info-fecha'>{fecha}</span>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default CardReport;