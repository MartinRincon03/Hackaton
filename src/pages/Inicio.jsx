import ContentInicio from "../components/organism/ContentInicio";
// import ImgIncendioCerro from '../../public/img/imgIncendioCerro.png'
// import ImgAguasResiduales from '../../public/img/imgDerrameAguasRecid.jpg'

function Inicio() {

    const dataReports = [
        {
            id: 1,
            titulo: 'Incendio del Cerro Mactumatzá',
            descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor sem non odio suscipit scelerisque. Phasellus iaculis volutpat ipsum nec accumsan. Maecenas vitae dui sed enim efficitur tempus. Vestibulum vel mi a nunc ornare suscipit. Nulla nec metus vel nibh aliquet finibus.',
            ubicacion: 'Al sur poniente de la cabecera municipal (16°43′N 93°09′O).',
            fecha: '2023-04-28',
            imagen: '../../public/img/imgIncendioCerro.png'
        },
        {
            id: 2,
            titulo: 'Derrame de aguas residuales en el Rio Pacu',
            descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor sem non odio suscipit scelerisque. Phasellus iaculis volutpat ipsum nec accumsan. Maecenas vitae dui sed enim efficitur tempus. Vestibulum vel mi a nunc ornare suscipit. Nulla nec metus vel nibh aliquet finibus.',
            ubicacion: 'Al sur poniente de la cabecera municipal de Suchiapa, en las coordenadas GPS: 16°38’09"N y 93°08’04"O',
            fecha: '2023-05-31',
            imagen: '../../public/img/imgDerrameAguasRecid.jpg'
        }
    ]

    return ( 
        <ContentInicio dataReports={dataReports}/>
     );
}

export default Inicio;