import '../../assets/styles/formReporter.css'

function InputF({type, placeholder, name}) {
    return ( 
        <input type={type} placeholder={placeholder} name={name} className='inputWrap' />
     );
}

export default InputF;